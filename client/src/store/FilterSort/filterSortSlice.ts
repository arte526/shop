import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterArraySettings, IFilterSortState } from "../types/filterSortSliceTypes";

const initialState: IFilterSortState = {
    filters: []
}

export const filterSortSlice = createSlice({
    name: 'filterSort',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<IFilterArraySettings>) => { 
            state.filters.push(action.payload)
        },
        editFilter: (state, action: PayloadAction<IFilterArraySettings>) => { 
            state.filters = state.filters.filter((el)=>{return el.filterId !== action.payload.filterId})
            state.filters.push(action.payload)
        },
        removeFilter: (state, action: PayloadAction<string>) => { 
            state.filters = state.filters.filter((el) => el.filterId !== action.payload) 
        },
        removeAllFilters: (state) => {
            state.filters = [];
        },
    }
})

export const { addFilter, removeFilter, removeAllFilters, editFilter } = filterSortSlice.actions;
export default filterSortSlice.reducer; 