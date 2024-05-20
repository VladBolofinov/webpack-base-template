import { type FC } from 'react';
import { BugButton } from '@/components/ErrorBoundary/BugButton';

const Shop: FC = () => {
    return (
        <div>
            <BugButton/>
            <button type="submit">OKKKKKKK
            </button>
            <h1>Shop</h1>
        </div>
    );
};

export default Shop;
