import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchAuthData = createAsyncThunk< undefined, undefined, { rejectValue: string }>(
    'auth/fetchAuthData',
    async (arg, thunkAPI) => {
        try {
            const response = await axios.get('https://my-proxy-server-tmdb.onrender.com/3/authentication');
            if (!response.data) {
                throw new Error();
            }
            console.log(response.data);
            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue('error');
        }
    }
)
