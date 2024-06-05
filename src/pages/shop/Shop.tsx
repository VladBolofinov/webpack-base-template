import React, { type FC, useCallback } from 'react';
import { BugButton } from '@/providers/ErrorBoundary/BugButton';
import { Counter } from '@/components/Counter/Counter';
import { fetchAuthData } from '@/redux/counterModel/services/fetchAuthData';
import { useAppDispatch } from '@/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getTestValue } from '@/redux/testModel/selectors/getTestValue/getTestValue';
import DynamicModuleLoader, { type ReducersList } from '@/components/DynamicModuleLoader/DynamicModuleLoader';
import { counterReducer } from '@/redux/counterModel/slice/counterSlice';

const initialReducers: ReducersList = {
    counter: counterReducer
}
const Shop: FC = () => {
    const dispatch = useAppDispatch();
    const testValue = useSelector(getTestValue);
    const handleAuthData = useCallback(() => {
        void dispatch(fetchAuthData());
    }, [dispatch])

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <BugButton/>
            <button type="submit">OKKKKKKK</button>
            <h1>Shop</h1>
            <Counter/>
            <button onClick={handleAuthData}>server response</button>
            <div>тут отображается значение второго слайса: {testValue}</div>
        </DynamicModuleLoader>
    );
};

export default Shop;
