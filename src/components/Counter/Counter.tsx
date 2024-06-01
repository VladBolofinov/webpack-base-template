import React from 'react';
import { useSelector } from 'react-redux';
import { counterActions } from '@/components/Counter/model/slice/counterSlice';
import { getCounterValue } from '@/components/Counter/model/selectors/getCounterValue/getCounterValue';
import { useAppDispatch } from '@/hooks/useAppDispatch/useAppDispatch';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(counterActions.increment());
    }
    const decrement = () => {
        dispatch(counterActions.decrement());
    }

    return (
        <div>
            <h1>value = {counterValue}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
};
