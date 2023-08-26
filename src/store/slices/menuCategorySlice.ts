import { menu_categories as MenuCategory } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MenuCategoryState {
    isLoading: boolean;
    items: MenuCategory[];
    error: Error | null;
}

const initialState: MenuCategoryState = {
    isLoading: false,
    items: [],
    error: null,
};

export const menuCategorySlice = createSlice({
    name: "menuCategories",
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setMenuCategory: (state, action: PayloadAction<MenuCategory[]>) => {
            state.items = action.payload;
        },
        updateMenuCategories: (state, action: PayloadAction<MenuCategory>) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        removeMenuCategory: (state, action: PayloadAction<MenuCategory>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        addMenuCategory: (state, action: PayloadAction<MenuCategory>) => {
            state.items = [...state.items, action.payload];
        },
    },
});

export const {
    setMenuCategory,
    updateMenuCategories,
    removeMenuCategory,
    addMenuCategory,
} = menuCategorySlice.actions;

export default menuCategorySlice.reducer;
