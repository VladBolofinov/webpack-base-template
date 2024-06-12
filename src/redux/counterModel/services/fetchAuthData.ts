import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from '@/providers/StoreProvider/config/StateSchema';
import { counterActions } from '@/redux/counterModel/slice/counterSlice';

export const fetchAuthData = createAsyncThunk< void, void, ThunkConfig<string>>(
    'auth/fetchAuthData',
    async (_, thunkAPI) => {
        const {
            extra,
            dispatch,
            rejectWithValue
            //getState
        } = thunkAPI;
        try {
            const response = await extra.api.get('/authentication');
            if (!response.data) {
                throw new Error();
            }
            //const state = getState();
            //console.log(`Это выводит стейт после запроса на серве ${state}`);
            console.log(response.data);
            dispatch(counterActions.increment());
            // @ts-expect-error soon will be fix
            extra.navigate('/about');
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    }
)
