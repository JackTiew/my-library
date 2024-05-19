import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        increment: ( state ) => {
            state.value += 1;
        },
        incrementByAmount: ( state, action) => {
            state.value += action.payload;
        },
        decrement: ( state ) => {
            state.value -= 1;
        },
    },
    extraReducers: ( builder ) => {
        builder.addCase(incrementAsync.pending, () => {
            console.log('incrementAsync.pending');
        }).addCase(incrementAsync.fulfilled, ( state, action) => {
            state.value += action.payload;
        });
    }
});


export const incrementAsync = createAsyncThunk(
    'counter/incrementAsync',
    async(value) => {
        await new Promise((resolve => setTimeout(resolve, 1000)));
        return value;
    }
)

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;