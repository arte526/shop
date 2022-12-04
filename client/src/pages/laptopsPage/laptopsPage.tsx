import React, { useState, useEffect } from 'react';
//store
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/index';
import { removeFilter, addFilter } from '../../store/FilterSort/filterSortSlice';
//UI components
import './laptopsPage.scss';
import Good from '../../components/Good/Good';
import { ButtonFilters, ButtonInActive, ButtonLight } from '../../components/UI/Buttons';



const LaptopsPage = () => {

    //store

    //Filters
    const filterSortSlice = useSelector((state: RootState) => state.filterSortSlice)
    const dispatch = useDispatch<AppDispatch>();

    const addFilterAction = () => { dispatch(addFilter(Math.random() + ''))}
    const removeFilterAction = (name: string) => { dispatch(removeFilter(name)) }

    const [filters, setFilters] = useState(null)

    const fetchFilters = () => {
        return filterSortSlice.filters.map((el, i)=>{
            return(
                <li key={i}>
                    <ButtonFilters
                    key={i}
                    onClickAction={(el: string)=>{removeFilterAction(el)}}
                    classNamesButton=""
                    title={el}
                    />
                </li>
            )
        }) 
    }

    //layout
    const [GoodHover, useGoodHoverUpdate] = useState(false);

    const arr = []; 
    for (let i = 0; i < 25; i += 1){
        arr.push(<Good/>)
    }

    return(
    <>
    <div className="flex flex-col justify-center">
        <div className="flex justify-center">
            <div  style={{width: '1400px'}}>
                <div className="grid grid-rows-30 grid-flow-col">
                    <div className="row-span-3 w-100%" style={{width: '200px'}}>
                        <div className="w-50 mt-5 rounded-lg leftSideFilters justify-center" style={{height: "700px"}}>
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
                            <div className="w-50">
                                <ButtonLight 
                                key={Math.random()}
                                onClickAction={() => addFilterAction()}
                                classNamesButton="w-50 h-7" title="Apply filters (2)"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-2 w-100%" style={{width: '1200px'}}>asdaasd312e98c</div>
                    <div className="row-span-28 col-span-2" style={{width: '1200px'}}>
                        <ul className='w-100% grid grid-cols-5 gap-2 justify-between'>
                            {
                                arr.map((el, i) => {
                                return (
                                    <li key={i}
                                        className={'w-60 h-80'}
                                        style={GoodHover ? {height: '280px', position: 'absolute'} : {height: '320px', position: 'relative'}}>
                                        {el}
                                    </li>
                                )})
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default LaptopsPage