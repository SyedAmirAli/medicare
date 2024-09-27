import { configureStore } from '@reduxjs/toolkit';
import HeaderReducer from '../slices/HeaderSlice';

export const store = configureStore({
    reducer: {
        header: HeaderReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
