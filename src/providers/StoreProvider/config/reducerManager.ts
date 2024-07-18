import { type Action, combineReducers, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import type {
    MountedReducers,
    ReducerManager,
    StateSchema,
    StateSchemaKey
} from '@/providers/StoreProvider/config/StateSchema';

export function createReducerManager (initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
    const reducers = { ...initialReducers }
    let combinedReducer = combineReducers(reducers)
    let keysToRemove: StateSchemaKey[] = []
    const mountedReducers: MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        reduce: (state: StateSchema, action: Action) => { //если что-то не работает  поставь вместо Action --- AnyAction
            if (keysToRemove.length > 0) {
                state = { ...state }
                keysToRemove.forEach(key => {
                    delete state[key]
                })
                keysToRemove = []
            }
            return combinedReducer(state, action)
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return
            }
            reducers[key] = reducer;
            mountedReducers[key] = true;
            combinedReducer = combineReducers(reducers)
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return
            }
            delete reducers[key]
            keysToRemove.push(key)
            mountedReducers[key] = false;
            combinedReducer = combineReducers(reducers)
        }
    }
}
