import { menu_addoncategories as MenuAddoncategory } from "@prisma/client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { config } from "@/config/Config";

interface MenuAddoncategoryState {
    isLoading: boolean;
    items: MenuAddoncategory[];
    error: Error | null;
}

const initialState: MenuAddoncategoryState = {
    isLoading: false,
    items: [],
    error: null,
};

export const fetchMenuAddoncategories = createAsyncThunk(
    "menuAddoncategories/fetchMenuAddoncategories",
    async (menuIds: number[], thunkAPI) => {
        thunkAPI.dispatch(setIsLoading(true));
        const response = await fetch(
            `${config.apiBaseUrl}/menusAddoncategories?menuIds=${menuIds.join(
                ","
            )}`
        );
        const menuAddoncategories = await response.json();
        thunkAPI.dispatch(setIsLoading(false));
        thunkAPI.dispatch(setMenuAddonCategory(menuAddoncategories));
    }
);

export const MenuAddoncategorySlice = createSlice({
    name: "menuAddoncategories",
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setMenuAddonCategory: (
            state,
            action: PayloadAction<MenuAddoncategory[]>
        ) => {
            state.items = action.payload;
        },
    },
});

export const { setMenuAddonCategory, setIsLoading } =
    MenuAddoncategorySlice.actions;

export default MenuAddoncategorySlice.reducer;
