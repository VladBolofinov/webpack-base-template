import { lazy } from 'react';

export const LazyAbout = lazy(async () => await import('./About'))
