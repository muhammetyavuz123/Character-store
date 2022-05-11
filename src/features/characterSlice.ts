import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Character {
  id: string;
  name: string;
  job: string;
  about: string;
  url: string;
}

const initialState: Character[] = [];

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    add: (state, action) => {
      const newCharacter = {
        id: Math.floor(Math.random() * 100),
        name: action.payload.name,
        job: action.payload.job,
        about: action.payload.about,
        url: action.payload.url,
      };

      var charsArray = new Array<any>();
      var arrStr = localStorage.getItem("newCharacter");

      if (arrStr) {
        charsArray = JSON.parse(arrStr);
        // console.log("charsArray", charsArray);
      }

      charsArray.push(newCharacter);

      localStorage.setItem("newCharacter", JSON.stringify(charsArray));
    },
    getCharacter: (state, action: PayloadAction<string>) => {
      const localDatas = JSON.parse(localStorage.getItem("newCharacter") || "");

      state.push(localDatas);
    },

    remove: (state, action: PayloadAction<string>) => {
      return state.filter((character) => character.id !== action.payload);
    },
  },
});
export default characterSlice.reducer;
export const { add, getCharacter, remove } = characterSlice.actions;
