import { createSlice } from '@reduxjs/toolkit';
import { type TestSchema } from '@/redux/testModel/types/testSchema';

const initialState: TestSchema = {
    testValue: 0
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        incrementTestValue: (state) => {
            state.testValue += 1;
        }
    }
});

export const { actions: testActions } = testSlice;
export const { reducer: testReducer } = testSlice;
