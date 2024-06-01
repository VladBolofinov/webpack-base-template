import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/hooks/useAppDispatch/useAppDispatch';
import { getCounterValue } from '@/redux/counterModel/selectors/getCounterValue/getCounterValue';
import { counterActions } from '@/redux/counterModel/slice/counterSlice';

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
