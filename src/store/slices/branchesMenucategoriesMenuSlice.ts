import { config } from "@/config/Config";
import { branches_menucategories_menus as BranchesMenucategoriesMenus } from "@prisma/client";
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface BranchesMenucategoriesMenusState {
    isLoading: boolean;
    items: BranchesMenucategoriesMenus[];
    error: Error | null;
}

const initialState: BranchesMenucategoriesMenusState = {
    isLoading: false,
    items: [],
    error: null,
};

export const fetchBranchesMenucategoriesMenus = createAsyncThunk(
    "BranchesMenucategoriesMenusSlice/fetchBranchesMenucategoriesMenus",
    async (branchId: string, thunkAPI) => {
        thunkAPI.dispatch(setIsLoading(true));
        const response = await fetch(
            ` ${config.apiBaseUrl}/branchesMenucategoriesMenus?branchId=${branchId} `
        );
        const branchesMenucategoriesMenus = await response.json();
        thunkAPI.dispatch(setIsLoading(false));
        thunkAPI.dispatch(
            setBranchesMenucategoriesMenus(branchesMenucategoriesMenus)
        );
    }
);

export const BranchesMenucategoriesMenusSlice = createSlice({
    name: "BranchesMenucategoriesMenus",
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },

        setBranchesMenucategoriesMenus: (
            state,
            action: PayloadAction<BranchesMenucategoriesMenus[]>
        ) => {
            state.items = action.payload;
        },
    },
});

export const { setBranchesMenucategoriesMenus, setIsLoading } =
    BranchesMenucategoriesMenusSlice.actions;

export default BranchesMenucategoriesMenusSlice.reducer;
