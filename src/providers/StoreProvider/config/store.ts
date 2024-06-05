import { configureStore, type ReducersMapObject } from '@reduxjs/toolkit';
import { type StateSchema } from '@/providers/StoreProvider/config/StateSchema';
//import { $api } from '@/api/api';
//import { counterReducer } from '@/redux/counterModel/slice/counterSlice';
import { testReducer } from '@/redux/testModel/slice/testSlice';
import { createReducerManager } from '@/providers/StoreProvider/config/reducerManager';

export function createReduxStore (initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        //counter: counterReducer,
        test: testReducer
    }

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialState
        /*middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })*/
    })

    // @ts-expect-error
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
