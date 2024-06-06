import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '@/redux/counterModel/selectors/getCounter/getCounter';
import { type CounterSchema } from '@/redux/counterModel/types/counterSchema';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema | undefined) => counter?.value
)
