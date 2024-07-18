import { type ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@/providers/StoreProvider/config/store';
import { type StateSchema } from '@/providers/StoreProvider/config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: StateSchema;
}
export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState } = props;
    //const navigate = useNavigate();

    const store = createReduxStore(
        initialState
        //navigate
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
