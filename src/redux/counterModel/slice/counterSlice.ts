import { createSlice } from '@reduxjs/toolkit';
import { type CounterSchema } from '@/redux/counterModel/types/counterSchema';
import { fetchAuthData } from '@/redux/counterModel/services/fetchAuthData';

const initialState: CounterSchema = {
    value: 0,
    isLoading: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuthData.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchAuthData.fulfilled, (state) => {
            state.isLoading = false;
        })
        builder.addCase(fetchAuthData.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
