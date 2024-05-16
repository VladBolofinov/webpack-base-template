import { lazy } from 'react';

export const LazyShop = lazy(async () => await import('./Shop'))
