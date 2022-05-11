import type { NextPage } from "next";
import { Form } from "../src/components";

const AddCharacter: NextPage = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <div className="container mx-auto md:w-1/2 w-full ">
        <h1 className="text-center py-10 text-2xl font-bold">Add Character</h1>
        <Form />
      </div>
    </div>
  );
};

export default AddCharacter;
