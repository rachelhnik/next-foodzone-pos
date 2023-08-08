import { addon_categories as AddonCategory } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AddonCategoryState {
    isLoading: boolean;
    items: AddonCategory[];
    error: Error | null;
}

const initialState: AddonCategoryState = {
    isLoading: false,
    items: [],
    error: null,
};

export const AddonCategorySlice = createSlice({
    name: "addonCategory",
    initialState,
    reducers: {
        setAddonCategory: (state, action) => {
            state.items = action.payload;
        },
        updateAddonCategories: (
            state,
            action: PayloadAction<AddonCategory>
        ) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        deleteAddonCategory: (state, action: PayloadAction<AddonCategory>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        addAddonCategory: (state, action: PayloadAction<AddonCategory>) => {
            state.items = [...state.items, action.payload];
        },
    },
});

export const {
    setAddonCategory,
    updateAddonCategories,
    deleteAddonCategory,
    addAddonCategory,
} = AddonCategorySlice.actions;

export default AddonCategorySlice.reducer;
