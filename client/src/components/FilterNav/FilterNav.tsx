import React from "react";
import { useDispatch, useSelector } from "react-redux";
//store
import { AppDispatch, RootState } from "../../store";
import { addFilter, removeFilter, removeAllFilters } from "../../store/FilterSort/filterSortSlice";
import { IFilterArraySettings } from "../../store/types/filterSortSliceTypes";
//UI components
import { FilterButton } from "../Buttons/FilterButton";
import { LightButton } from "../Buttons/LightButton";
import FilterNavDropDown from "./FilterNavDropDown/FilterNavDropDown";

export const FilterNav = () => {

    //store
    const filterSortSlice = useSelector((state: RootState) => state.filterSortSlice)
    const dispatch = useDispatch<AppDispatch>();
    
    const addFilterAction = (props: IFilterArraySettings) => { 
        const {filterId, filterName} = props;
        if(filterSortSlice.filters.find(element => element.filterName === filterName)){
            return;
        }
        dispatch(addFilter({filterId, filterName}))
    }
    const removeFilterAction = (id: string) => { 
        dispatch(removeFilter(id)) 
    }
    const removeAllFiltersAction = (): void => {
        dispatch(removeAllFilters())
    }

    //layout
    const getFiltersAmount = () => {
        return `Apply filters (${filterSortSlice.filters.length})`
    }

    const fetchFilters = () => {
        return filterSortSlice.filters.map((el, i)=>{
            return(
            (el.filterId && el.filterName) ? (
                <li key={i}>
                    <FilterButton
                    key={i}
                    onClickAction={(event: React.MouseEventHandler<HTMLButtonElement>) => {removeFilterAction(el.filterId)}}                        classNamesButton="antialiased"
                    title={el.filterName}
                    />
                </li>) : (null)
            )
        })
    }
    


    return (
        <>
        <div className="w-50">
            <div className="flex justify-center">
                <p className='RobotoBoldFont tracking-tight mt-2'>FILTERS</p>
            </div>
            <div className="mt-2 flex justify-center w-100%">
                <LightButton
                width="80%"
                height="30px"
                isActive={filterSortSlice.filters.length === 0 ? false : true}
                onClickAction={()=>{removeAllFiltersAction()}}
                classNamesButton='w-50 h-7' title="Reset filters"/>
            </div>
            <div className="w-100%">
                <ul className='m-2 flex flex-row flex-wrap justify-center overflow-hidden'>
                    {
                        fetchFilters()
                    }
                </ul>
            </div>
            <div className="w-100% flex justify-center">
                <ul>
                    <FilterNavDropDown removeFilterAction={removeFilterAction} addFilterAction={addFilterAction}/>
                </ul>
            </div>
            <div className="mt-5 flex justify-center w-100%">
                <LightButton 
                key={Math.random()}
                isActive={filterSortSlice.filters.length === 0 ? false : true}
                onClickAction={() => {}}
                width="90%"
                height="30px"
                classNamesButton="" title={getFiltersAmount()}/>
            </div>
        </div>
        </>
    )
}

