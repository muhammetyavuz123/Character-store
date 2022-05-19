/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC, useEffect } from "react";
import { Rubbish, Down, Up } from "../icons";

export const ListItem: FC<{
  id: string;
  name: string;
  items?: null;
  remove?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ id, name, remove, items }) => {
  console.log("itemss", items);

  return (
    <>
      <div className="flex justify-start items-center bg-white mb-3 rounded-md">
        <div className=" flex justify-start items-center space-x-5 h-14 pl-3">
          <h3 className="">{id}</h3>
          <img
            src="https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png/revision/latest/scale-to-width-down/247?cb=20190409004811"
            alt="Girl in a jacket"
            width="50"
            height="60"
          />
          <Link key={id} href={`details/${id}`}>
            <a>
              <p className="underline">{name}</p>
            </a>
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-end pr-3">
          {/* <Up />
          <Down /> */}
          <button onClick={remove}>
            <Rubbish />
          </button>
        </div>
      </div>
    </>
  );
};
