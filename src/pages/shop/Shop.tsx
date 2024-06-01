import React, { type FC, useCallback } from 'react';
import { BugButton } from '@/providers/ErrorBoundary/BugButton';
import { Counter } from '@/components/Counter/Counter';
import { fetchAuthData } from '@/redux/counterModel/services/fetchAuthData';
import { useAppDispatch } from '@/hooks/useAppDispatch/useAppDispatch';

const Shop: FC = () => {
    const dispatch = useAppDispatch();
    const handleAuthData = useCallback(() => {
        void dispatch(fetchAuthData());
    }, [dispatch])
    return (
        <div>
            <BugButton/>
            <button type="submit">OKKKKKKK</button>
            <h1>Shop</h1>
            <Counter/>
            <button onClick={handleAuthData}>server response</button>
        </div>
    );
};

export default Shop;
