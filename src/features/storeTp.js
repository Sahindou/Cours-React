import {configureStore} from "@reduxjs/toolkit";
import articlesSlice from "./articlesRandom/articlesSlice.js";

const storeTp = configureStore({
    reducer: {
        articles: articlesSlice,
    },
});

export default storeTp;