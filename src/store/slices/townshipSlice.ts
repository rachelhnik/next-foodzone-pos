import { townships as Township } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

interface TownshipState {
    isLoading: boolean;
    items: Township[];
    error: Error | null;
}

const initialState: TownshipState = {
    isLoading: false,
    items: [],
    error: null,
};

export const townshipSlice = createSlice({
    name: "tables",
    initialState,
    reducers: {
        setTownship: (state, action) => {
            state.items = action.payload;
        },
    },
});

export const { setTownship } = townshipSlice.actions;

export default townshipSlice.reducer;
