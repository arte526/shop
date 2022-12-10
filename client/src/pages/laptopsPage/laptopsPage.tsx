import React, { useState, useEffect } from 'react';
//UI components
import './laptopsPage.scss';
import Good from '../../components/Good/Good';
import { FilterNav } from '../../components/FilterNav/FilterNav';
import FilterNavAcordion from '../../components/FilterNav/FilterNavDropDown/FilterNavDropDown';
import { Preloader } from '../../assets/preloaders/preloaderSite';
import DropDown from '../../components/Dropdown/Dropdown';

const LaptopsPage = () => {

    //store

    //layout
    const [isLoading, setIsLoading] = useState(true)

    const useFetchGoods = () => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);

        const arr = []; 
        for (let i = 0; i < 25; i += 1){
            arr.push(<Good/>)
        }

        return isLoading ? <Preloader/> : 
        <ul className='w-100% grid grid-cols-5 gap-2 justify-between'>
        {arr.map((el, i) => {
        return (
            <li key={i}
                className={'w-60 h-80'}
                style={{height: '320px', position: 'relative'}}>
                {el}
            </li>
        )})}
        </ul>
    }

    const itemsSortByDropdown = [{title: "Price high to low"},{title: "Price low to high"}]
    const itemsShowDropdown = [{title: '9 per page'},{title: '18 per page'},{title: '32 per page'}]

    return(
    <>
    <div className="flex flex-col justify-center">
        <div className="flex justify-center">
            <div  style={{width: '1400px'}}>
                <div className="grid grid-rows-30 grid-flow-col">
                    <div className="row-span-3 w-100%" style={{width: '200px'}}>
                        <div className="w-50 mt-5 rounded-lg leftSideFilters justify-center" style={{marginTop: "10px",height: "700px"}}>
                            <FilterNav/>
                        </div>
                    </div>
                    <div className="col-span-2 row-span-2 w-100%" style={{width: '1200px', height: '40px', marginTop: "10px"}}>
                        <div className="ml-5 h-[40px]">
                            <ul className="flex flex-row justify-between h-[40px] bg-slate-100 rounded-lg p-[4px]">
                                <li className='ml-2 h-[21px]'>
                                    <span className='RobotoMediumFont align-middle'>Items 1-35 of 61</span>
                                </li>
                                <div className="w-[200px] flex flex-row justify-between">
                                    <li>
                                        <DropDown title="Sort by" items={itemsSortByDropdown}/>
                                    </li>
                                    <li>
                                        <DropDown title="Show" items={itemsShowDropdown}/>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="row-span-28 col-span-2" style={{width: '1200px'}}>
                        {useFetchGoods()}
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default LaptopsPage