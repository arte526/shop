import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { addFilter, removeFilter } from "../../store/FilterSort/filterSortSlice";
import { ButtonFilters, ButtonInActive, ButtonLight } from "../UI/Buttons"



export const FilterNav = () => {

    const filterSortSlice = useSelector((state: RootState) => state.filterSortSlice)
    const dispatch = useDispatch<AppDispatch>();

    const addFilterAction = () => { dispatch(addFilter({filterId: (Math.floor(Math.random()*100)+ 1) + "", filterName: 'bfu9h3'}))}
    const removeFilterAction = (id: string) => { dispatch(removeFilter(id)) }

    const fetchFilters = () => {
        return filterSortSlice.filters.map((el, i)=>{
            return(
                (el.filterId && el.filterName) ? (
                <li key={i}>
                    <ButtonFilters
                    key={i}
                    onClickAction={(event: React.MouseEventHandler<HTMLButtonElement>)=>{console.log(event)}}
                    classNamesButton=""
                    title={el.filterName}
                    />
                </li>) : (null)
            )
        })
    }


    return (
        <>
            <div className="flex justify-center">
                <p className='RobotoBoldFont tracking-tight mt-2'>FILTERS</p>
            </div>
            <div className="w-50">
                <ul className='m-2 flex flex-row flex-wrap justify-center overflow-hidden'>
                    {
                        fetchFilters()
                    }
                </ul>
            </div>
            <div className="w-50">
                <ButtonInActive
                onClickAction={()=>{}}
                classNamesButton='w-50 h-7' title="Reset filters"/>
            </div>
            <div className="flex">
                
            </div>
            <div className="w-50">
                <ButtonLight 
                key={Math.random()}
                onClickAction={() => addFilterAction()}
                classNamesButton="w-50 h-7" title="Apply filters (2)"/>
            </div>
        </>
    )
}