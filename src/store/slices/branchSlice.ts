import { branches as Branch } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BranchesState {
    isLoading: boolean;
    items: Branch[];
    error: Error | null;
}

const initialState: BranchesState = {
    isLoading: false,
    items: [],
    error: null,
};

export const branchesSlice = createSlice({
    name: "branches",
    initialState,
    reducers: {
        setBranches: (state, action) => {
            state.items = action.payload;
        },
        updateBranches: (state, action: PayloadAction<Branch>) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        deleteBranch: (state, action: PayloadAction<Branch>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        addBranch: (state, action: PayloadAction<Branch>) => {
            state.items = [...state.items, action.payload];
        },
    },
});

export const { setBranches, updateBranches, deleteBranch, addBranch } =
    branchesSlice.actions;

export default branchesSlice.reducer;
