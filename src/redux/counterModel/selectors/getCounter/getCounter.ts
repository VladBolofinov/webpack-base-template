import { type StateSchema } from '@/providers/StoreProvider/config/StateSchema';

export const getCounter = (state: StateSchema) => state.counter;
