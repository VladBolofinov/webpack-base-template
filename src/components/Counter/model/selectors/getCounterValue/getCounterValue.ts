import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '@/components/Counter/model/selectors/getCounter/getCounter';
import { type CounterSchema } from '@/components/Counter/model/types/counterSchema';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
)
