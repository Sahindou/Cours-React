import {createSlice} from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: [],
    reducers: {
        addWishlist: (state, action) => {
            state.push(action.payload);
        },
        removeWishlist: (state, action) => {
            state.splice(state.indexOf(action.payload), 1);
        }
    }
})

export const {addWishlist, removeWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;