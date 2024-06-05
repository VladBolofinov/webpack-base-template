import React, { type FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { type StateSchemaKey, type ReduxStoreWithManager } from '@/providers/StoreProvider/config/StateSchema';

import { type Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    [name in StateSchemaKey]?: Reducer;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface DynamicModuleLoaderProps {
    children: React.ReactNode;
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, reducers, removeAfterUnmount } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            // @ts-expect-error
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        })
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducersListEntry) => {
                    // @ts-expect-error
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                })
            }
        }
        //eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export default DynamicModuleLoader;
