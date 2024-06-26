import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import ErrorBoundary from '@/providers/ErrorBoundary/ErrorBoundary';
import { StoreProvider } from '@/providers/StoreProvider/StoreProvider';
const root = createRoot(document.getElementById('root')!);
root.render(
    <StrictMode>
        <BrowserRouter>
            <StoreProvider>
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </StoreProvider>
        </BrowserRouter>
    </StrictMode>
);
