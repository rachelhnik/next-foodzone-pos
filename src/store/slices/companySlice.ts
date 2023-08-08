import { companies as Company } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CompanyState {
    isLoading: boolean;
    items: Company | null;
    error: Error | null;
}

const initialState: CompanyState = {
    isLoading: false,
    items: null,
    error: null,
};

export const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        setCompany: (state, action) => {
            state.items = action.payload;
        },
        updateCompany: (state, action: PayloadAction<Company>) => {
            state.items?.name === action.payload.name;
        },
    },
});

export const { setCompany, updateCompany } = companySlice.actions;

export default companySlice.reducer;
