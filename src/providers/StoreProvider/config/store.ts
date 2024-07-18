import { configureStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema, type ThunkExtraArg } from '@/providers/StoreProvider/config/StateSchema';
//import { counterReducer } from '@/redux/counterModel/slice/counterSlice';
import { testReducer } from '@/redux/testModel/slice/testSlice';
import { createReducerManager } from '@/providers/StoreProvider/config/reducerManager';
import { $api } from '@/api/api';
import { type CombinedState } from 'redux';

export function createReduxStore (
    initialState?: StateSchema
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        //counter: counterReducer,
        test: testReducer
    }

    const reducerManager = createReducerManager(rootReducers);
    const extraArg: ThunkExtraArg = {
        api: $api
    }
    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg
            }
        })
    })

    // @ts-expect-error soon will be fix
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
