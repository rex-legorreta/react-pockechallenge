import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import loggerMiddleware from '../middleware/logger';
import { rootReducer } from './reducers';

export default function configureAppStore(preloadedState?: any) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [loggerMiddleware, ...getDefaultMiddleware()],
    preloadedState
  });

  return store;
}
