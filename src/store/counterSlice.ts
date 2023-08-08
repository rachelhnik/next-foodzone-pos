import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";
import { config } from "@/config/Config";

interface CounterState {
    value: number;
    isLoading: boolean;
    data: any;
}

const initialState: CounterState = {
    value: 0,
    isLoading: false,
    data: {},
};

export const fetchContent = createAsyncThunk(
    "content/fetchContent",
    async () => {
        const response = await fetch(`${config.apiBaseUrl}/app`);
        const data = await response.json();
        return data;
    }
);

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchContent.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchContent.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchContent.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
