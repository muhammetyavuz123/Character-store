/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Link from "next/link";
import { AddButton, ListItem } from "../src/components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../src/store";
import { getCharacter } from "../src/features/characterSlice";

type Character = {
  id: string;
  name: string;
};

const Home: NextPage = () => {
  const [data, setData] = useState<Character[]>([]);
  const characters = useAppSelector((state) => state.character);
  console.log("charactersv", characters);

  const dispatch = useAppDispatch();
  const fetchDatas = async () => {
    var charsArray = new Array<any>();
    var arrStr = localStorage.getItem("newCharacter");

    if (arrStr) {
      charsArray = JSON.parse(arrStr);
    }
    console.log("charsArray", charsArray);

    const datas = await axios.get<Character[]>(
      "https://5fc9346b2af77700165ae514.mockapi.io/simpsons"
    );

    const AllCharacter = charsArray.concat(datas.data);
    setData(AllCharacter);

    return datas;
  };
  useEffect(() => {
    fetchDatas();
  }, []);

  const deleteData = (id: string) => {
    const datas = data.filter((i) => i.id !== id);
    setData(datas);
  };

  // item up down func
  const arraySwap = (arr: any, idx1: any, idx2: any) => {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
    return arr;
  };

  // arraySwap(data, 1, 3)[(5, 11, 9, 7)];
  return (
    <>
      <div className="bg-gray-200 min-h-screen">
        <div className="container mx-auto md:w-1/2 w-full">
          <h1 className="text-center py-10 text-2xl font-bold">Characters</h1>
          <div className="flex justify-end items-end">
            <Link href="/addCharacter">
              <a>
                <AddButton />
              </a>
            </Link>
          </div>
          {data.map((item, idx) => (
            <>
              <ListItem
                key={item.id}
                id={item.id}
                name={item.name}
                remove={() => deleteData(item.id)}
                // onArrowDown={arraySwap.bind(this, arr, 0, 1)}
                // onArrowUp={arraySwap.bind(this, arr, 1, 0)}
              />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
