import { type TestSchema } from '@/redux/testModel/types/testSchema';
import { createSelector } from '@reduxjs/toolkit';
import { getTest } from '@/redux/testModel/selectors/getTest/getTest';

export const getTestValue = createSelector(
    getTest,
    (test: TestSchema) => test?.testValue
)
