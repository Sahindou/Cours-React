import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
    name: "wishlist",
    initialState: {
        items: [], // Liste des articles favoris
    },
    reducers: {
        addToWishlist: (state, action) => {
            // Vérifie si l'article est déjà dans la liste des favoris
            const exists = state.items.some((item) => item.id === action.payload.id);
            if (!exists) {
                state.items.push(action.payload); // Ajoute l'article s'il n'existe pas
            }
        },
        removeFromWishlist: (state, action) => {
            // Filtre les articles pour supprimer celui qui correspond à l'ID fourni
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
        clearWishlist: (state) => {
            // Vide la liste des favoris
            state.items = [];
        },
    },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;