import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],

  },
  reducers: {
    setArticles: (state, action) => {
        console.log("Payload received in reducer:", action.payload);
        state.articles = action.payload;
    },


  },
})

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;