import { menus as Menu } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MenuState {
    isLoading: boolean;
    items: Menu[];
    error: Error | null;
}

const initialState: MenuState = {
    isLoading: false,
    items: [],
    error: null,
};

export const MenuSlice = createSlice({
    name: "menus",
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.items = action.payload;
        },
        updateMenus: (state, action: PayloadAction<Menu>) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        removeMenu: (state, action: PayloadAction<Menu>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        addMenu: (state, action: PayloadAction<Menu>) => {
            state.items = [...state.items, action.payload];
        },
    },
});

export const { setMenu, updateMenus, removeMenu, addMenu } = MenuSlice.actions;

export default MenuSlice.reducer;
