import { type CounterSchema } from '@/redux/counterModel/types/counterSchema';
import { type TestSchema } from '@/redux/testModel/types/testSchema';
import { type Action, type EnhancedStore, type Reducer, type ReducersMapObject } from '@reduxjs/toolkit';
import { type CombinedState } from 'redux';
import { type AxiosInstance } from 'axios';
export interface StateSchema {
    test: TestSchema;

    //async reducers
    counter?: CounterSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: Action) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // true - вмонтирован, false - демонтирован
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
