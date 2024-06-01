import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '@/providers/StoreProvider/config/StateSchema';
import { counterReducer } from '@/components/Counter/model/slice/counterSlice';

export function createReduxStore (initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer
    }

    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
