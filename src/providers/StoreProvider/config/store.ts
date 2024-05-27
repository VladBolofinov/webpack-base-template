import { configureStore } from '@reduxjs/toolkit';
import { type StateSchema } from '@/providers/StoreProvider/config/StateSchema';
import { counterReducer } from '@/components/Counter/model/slice/counterSlice';

export function createReduxStore (initialState?: StateSchema) {
    return configureStore({
        reducer: {
            counter: counterReducer
        },
        preloadedState: initialState
    })
}
