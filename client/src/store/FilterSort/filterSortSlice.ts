import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterArraySettings, IFilterSortState } from "../types/filterSortSliceTypes";

const initialState: IFilterSortState = {
    filters: [{
        filterId: '',
        filterName: ''
    }]
}

export const filterSortSlice = createSlice({
    name: 'filterSort',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<IFilterArraySettings>) => { 
            state.filters.push(action.payload)
        },
        removeFilter: (state, action: PayloadAction<string>) => { 
            state.filters = state.filters.filter((el) => el.filterId !== action.payload) 
        },
    }
})

export const { addFilter, removeFilter } = filterSortSlice.actions;
export default filterSortSlice.reducer; 