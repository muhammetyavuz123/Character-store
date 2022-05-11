/* eslint-disable react-hooks/exhaustive-deps */
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { add, remove, getCharacter } from "../features/characterSlice";
import { useAppDispatch, useAppSelector } from "../store";
import { AddButton } from "./AddButton";

export const Form: FC<{}> = () => {
  const characters = useAppSelector((state) => state.character);
  console.log("charactersasdjhsad", characters);

  const [character, setCharacte] = useState({
    name: "",
    job: "",
    about: "",
    url: "",
  });

  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(getCharacter);
  }, []);

  // character add function
  const onSave = (e: any) => {
    e.preventDefault();
    dispatch(add(character));
    setCharacte({
      name: "",
      job: "",
      about: "",
      url: "",
    });
    router.push("/");
  };

  // delete Function
  // const onDelete = (id: string) => {
  //   dispatch(remove(id));
  // };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCharacte((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
      <form className="w-full bg-white p-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Name"
              name="name"
              value={character.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Job
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Job"
              name="job"
              value={character.job}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              About
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="textarea"
              placeholder="About"
              name="about"
              value={character.about}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Image
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="Image"
              name="url"
              value={character.url}
              onChange={handleChange}
            />
          </div>
        </div>
        <AddButton onclick={onSave} />
      </form>
    </>
  );
};
