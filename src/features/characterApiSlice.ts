import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export interface CharacterApi {
  id: string;
  name: string;
  avatar: string;
  job: string;
  desciription: string;
}

interface CharacterState {
  data: CharacterApi | null;
  loading: boolean;
  error: string;
}
const initialState: CharacterState = {
  data: null,
  loading: false,
  error: "",
};

export const fetchCharacter = createAsyncThunk("fetchCharacter", async () => {
  const response = await axios.get<CharacterApi>(
    "https://5fc9346b2af77700165ae514.mockapi.io/simpsons"
  );
  return response.data;
});
const characterApiSlice = createSlice({
  name: "characterApi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacter.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchCharacter.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCharacter.rejected, (state, action) => {
      state.loading = false;
      state.error = "Fetching Error";
    });
  },
});
export default characterApiSlice.reducer;
