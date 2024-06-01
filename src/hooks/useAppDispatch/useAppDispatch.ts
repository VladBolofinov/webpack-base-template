import { useDispatch } from 'react-redux';
import { type AppDispatch } from '@/providers/StoreProvider/config/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
