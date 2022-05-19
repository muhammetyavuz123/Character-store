/* eslint-disable react-hooks/exhaustive-deps */
import type { NextPage } from "next";
import Link from "next/link";
import { AddButton, ListItem } from "../src/components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../src/store";
import { getCharacter } from "../src/features/characterSlice";
import { Down, Up } from "../src/icons";

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

  const UP = -1;
  const DOWN = 1;
  //handle Move Function
  const handleMove = (id: any, direction: any) => {
    const items = data;

    const position = items.findIndex((i) => i.id === id);
    if (position < 0) {
      throw new Error("Given item not found.");
    } else if (
      (direction === UP && position === 0) ||
      (direction === DOWN && position === items.length - 1)
    ) {
      return; // canot move outside of array
    }

    const item = items[position]; // save item for later
    const newItems = items.filter((i) => i.id !== id); // remove item from array
    newItems.splice(position + direction, 0, item);

    setData(newItems);
  };

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
              />
              <button onClick={() => handleMove(item.id, UP)}>
                <Up></Up>
              </button>
              <button onClick={() => handleMove(item.id, DOWN)}>
                <Down></Down>
              </button>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
