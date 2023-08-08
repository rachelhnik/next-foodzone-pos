import { tables as Table } from "@prisma/client";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TablesState {
    isLoading: boolean;
    items: Table[];
    error: Error | null;
}

const initialState: TablesState = {
    isLoading: false,
    items: [],
    error: null,
};

export const tablesSlice = createSlice({
    name: "tables",
    initialState,
    reducers: {
        setTables: (state, action) => {
            state.items = action.payload;
        },
        updateTables: (state, action: PayloadAction<Table>) => {
            state.items = state.items.map((item) =>
                item.id === action.payload.id ? action.payload : item
            );
        },
        deleteTable: (state, action: PayloadAction<Table>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        addTable: (state, action: PayloadAction<Table>) => {
            state.items = [...state.items, action.payload];
        },
    },
});

export const { setTables, updateTables, deleteTable, addTable } =
    tablesSlice.actions;

export default tablesSlice.reducer;
