import { configureStore } from '@reduxjs/toolkit'
import userSlice from './User/userSlice';
import filterSortSlice from './FilterSort/filterSortSlice';

export const store = configureStore({
    reducer: {
        userSlice,
        filterSortSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

