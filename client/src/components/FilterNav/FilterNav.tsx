import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../store";
import { addFilter, removeFilter, removeAllFilters } from "../../store/FilterSort/filterSortSlice";

import { FilterButton } from "../Buttons/FilterButton";
import { LightButton } from "../Buttons/LightButton";

import FilterNavDropDown from "./FilterNavDropDown/FilterNavAcordion";


export const FilterNav = () => {

    const filterSortSlice = useSelector((state: RootState) => state.filterSortSlice)
    const dispatch = useDispatch<AppDispatch>();

    const addFilterAction = () => { dispatch(addFilter({
        filterId: (Math.random() + 1) + "", 
        filterName: Math.random() + ""})) }
    const removeFilterAction = (id: string) => { 
        dispatch(removeFilter(id)) 
    }
    const removeAllFiltersAction = (): void => {
        dispatch(removeAllFilters())
    }

    const getFiltersAmount = () => {
        return filterSortSlice.filters.length === 0 ? 'Select some filters' : `Apply filters (${filterSortSlice.filters.length})`
    }

    const fetchFilters = () => {
        return(<> 
            {
                filterSortSlice.filters.map((el, i)=>{
                    return(
                        (el.filterId && el.filterName) ? (
                        <li key={i}>
                            <FilterButton
                            key={i}
                            onClickAction={(event: React.MouseEventHandler<HTMLButtonElement>) => {removeFilterAction(el.filterId)}}
                            classNamesButton="antialiased"
                            title={el.filterName}
                            />
                        </li>) : (null)
                    )
                })
            }
        </>        
        )
    }


    return (
        <>
            <div className="flex justify-center">
                <p className='RobotoBoldFont tracking-tight mt-2'>FILTERS</p>
            </div>
            <div className="mt-2 w-50">
                <LightButton
                isActive={false}
                onClickAction={()=>{removeAllFiltersAction()}}
                classNamesButton='w-50 h-7' title="Reset filters"/>
            </div>
            <div className="w-50">
                <ul className='m-2 flex flex-row flex-wrap justify-center overflow-hidden'>
                    {
                        fetchFilters()
                    }
                </ul>
            </div>
            <div className="w-50 flex justify-center">
                <ul>
                    <FilterNavDropDown title={'Processors'}/>
                </ul>
            </div>
            <div className="w-50">
                <LightButton 
                key={Math.random()}
                isActive={filterSortSlice.filters.length === 0 ? false : true}
                onClickAction={() => addFilterAction()}
                classNamesButton="mt-2 w-50 h-7" title={getFiltersAmount()}/>
            </div>
        </>
    )
}

