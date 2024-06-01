import React, { type FC } from 'react';
import { BugButton } from '@/providers/ErrorBoundary/BugButton';
import { Counter } from '@/components/Counter/Counter';

const Shop: FC = () => {
    const url = 'https://my-proxy-server-tmdb.onrender.com/3/authentication';
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMjY5NGFhZGIyNWFiZWEyNDFjZjY4MWYxNDI3NGY1MSIsInN1YiI6IjY2NTYxMWI3MTVmYTJiNDYzODcwNzU2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.llQ_n_twbEcs4VpEz5kQ6FlrYOEERvy9TOAQ9AuTc1s',
            accept: 'application/json'
        }
    };

    const handleFetch = () => {
        fetch(url, options)
            .then(async response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return await response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    };

    const testServer = () => {
        fetch('http://localhost:8000/test') // URL вашего сервера
            .then(async response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return await response.text();
            })
            .then(data => {
                console.log('Server response:', data);
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    }

    return (
        <div>
            <BugButton/>
            <button type="submit">OKKKKKKK</button>
            <h1>Shop</h1>
            <Counter/>
            <button onClick={handleFetch}>server response</button>
            <button onClick={testServer}>server TEST</button>
        </div>
    );
};

export default Shop;
