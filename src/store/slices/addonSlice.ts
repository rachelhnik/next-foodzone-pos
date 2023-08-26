import { addons as Addon } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AddonsState {
    isLoading: boolean;
    items: Addon[];
    error: Error | null;
}

const initialState: AddonsState = {
    isLoading: false,
    items: [],
    error: null,
};

export const addonsSlice = createSlice({
    name: "addons",
    initialState,
    reducers: {
        setAddons: (state, action) => {
            state.items = action.payload;
        },
        updateAddons: (state, action: PayloadAction<Addon>) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        deleteAddon: (state, action: PayloadAction<Addon>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        addAddon: (state, action: PayloadAction<Addon>) => {
            state.items = [...state.items, action.payload];
        },
    },
});

export const { setAddons, updateAddons, deleteAddon, addAddon } =
    addonsSlice.actions;

export default addonsSlice.reducer;
