import { FC } from "react";

export const AddButton: FC<{
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}> = ({ onclick }) => {
  return (
    <button
      onClick={onclick}
      className="rounded-full bg-blue-400 w-32 h-8 text-white mb-5"
    >
      Add Character
    </button>
  );
};
