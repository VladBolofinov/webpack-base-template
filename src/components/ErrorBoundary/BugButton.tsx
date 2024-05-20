import { type FC, useEffect, useState } from 'react';

export const BugButton: FC = () => {
    const [error, setError] = useState(false);

    const onThrow = () => { setError(true); };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <button onClick={onThrow}>throw error</button>
    );
};
