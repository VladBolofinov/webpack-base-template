import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '@/providers/StoreProvider/config/StateSchema';
import { $api } from '@/api/api';
import { counterReducer } from '@/redux/counterModel/slice/counterSlice';

export function createReduxStore (initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer
    }

    return configureStore({
        reducer: rootReducers,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
