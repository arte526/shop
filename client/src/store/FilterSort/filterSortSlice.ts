import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSortState } from "../types/filterSortSliceTypes";

const initialState: IFilterSortState = {
    filters: []
}

export const filterSortSlice = createSlice({
    name: 'filterSort',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<string>) => { 
            state.filters.push(action.payload)
        },
        removeFilter: (state, action: PayloadAction<string>) => { 
            state.filters = state.filters.filter((el) => el !== action.payload) 
        },
    }
})

export const { addFilter, removeFilter } = filterSortSlice.actions;
export default filterSortSlice.reducer; 