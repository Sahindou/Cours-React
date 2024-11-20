import {configureStore} from "@reduxjs/toolkit";
import wishlist from "./wishlist.jsx";

const store = configureStore({
    reducer: {
        wishlist
    }
});

export default store;