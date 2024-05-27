import { type FC } from 'react';
import { BugButton } from '@/providers/ErrorBoundary/BugButton';
import { Counter } from '@/components/Counter/Counter';

const Shop: FC = () => {
    return (
        <div>
            <BugButton/>
            <button type="submit">OKKKKKKK</button>
            <h1>Shop</h1>
            <Counter/>
        </div>
    );
};

export default Shop;
