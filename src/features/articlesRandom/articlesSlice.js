import { createSlice } from "@reduxjs/toolkit";

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    category: ["general", "business", "entertainment", "health", "science", "sports", "technology"],
    lang: [
        { country: "France", code: "fr" },
        { country: "Allemagne", code: "de" },
        { country: "Angleterre", code: "en" },
        { country: "Italie", code: "it" },
        { country: "Pays-Bas", code: "nl" },
        { country: "Norvège", code: "no" },
        { country: "Portugal", code: "pt" },
        { country: "Russie", code: "ru" },
        { country: "Suède", code: "se" },
        { country: "Ouzbékistan", code: "ud" },
        { country: "Monde Arabe", code: "ar" }
    ],
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