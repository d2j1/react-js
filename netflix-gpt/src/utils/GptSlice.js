import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
   isGptSearchView: false,
  },
  reducers: {
     toggleGptSearchView: (state, action) => {
      state.isGptSearchView = !state.isGptSearchView;
    },
},
});

export const { toggleGptSearchView } = GptSlice.actions;

export default GptSlice.reducer;
