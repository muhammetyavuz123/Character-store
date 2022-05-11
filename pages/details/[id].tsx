/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
type Character = {
  id: string;
  name: string;
  avatar: string;
  job: string;
  description: string;
};
const Details: NextPage = () => {
  const [detailData, setDetailData] = useState<Character>();
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);

  useEffect(() => {
    axios
      .get<Character>(
        `https://5fc9346b2af77700165ae514.mockapi.io/simpsons/${id}`
      )
      .then((response) => setDetailData(response.data))
      .catch((error) => console.log(error));
  }, []);
  console.log("detailData", detailData);

  return (
    <div className="bg-gray-200 h-screen">
      <div className="container mx-auto md:w-1/2 w-full ">
        <h1 className="text-center py-10 text-2xl">{detailData?.name}</h1>
        <div className="flex justify-center items-center flex-col">
          <img src={detailData?.avatar} alt="Italian Trulli"></img>
          <p className="pt-16">{detailData?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
