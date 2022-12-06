import React from 'react';
//UI components
import './laptopsPage.scss';
import Good from '../../components/Good/Good';
import { FilterNav } from '../../components/FilterNav/FilterNav';
import FilterNavAcordion from '../../components/FilterNav/FilterNavDropDown/FilterNavAcordion';



const LaptopsPage = () => {

    //store

    //layout

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
                            <FilterNav/>
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
                                        style={{height: '320px', position: 'relative'}}>
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
    <FilterNavAcordion/>
    </>
    )
}

export default LaptopsPage