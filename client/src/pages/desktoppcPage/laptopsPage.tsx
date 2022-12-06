import React, { useState } from 'react';
import './laptopsPage.scss';
//UI components
import Good from '../../components/Good/Good';
import { LightButton } from '../../components/Buttons/LightButton';
import { FilterButton } from '../../components/Buttons/FilterButton';

const LaptopsPage = () => {

    const [GoodHover, useGoodHoverUpdate] = useState(false);

    // const HoverGood = (event: React.SyntheticEvent<EventTarget>, status: boolean) => {
    //     useGoodHoverUpdate(status);
    //     console.log(event);
    // }

    const arr = []; 
    for (let i = 0; i < 25; i += 1){
        arr.push(<Good/>)
    }

    return(
    <>
    <div className="flex flex-col justify-center">
        {/* <div className="mt-2 flex justify-center w-100%">
            <div className="" style={{width: "1400px"}}>
                <div className="">
                    <nav className="bg-gray-100 px-5 py-3 rounded-md w-full">
                        <ol className="list-reset flex">
                            <li><a href="#" className="text-cyan-600 hover:text-blue-700">
                                    <p className='RobotoMediumFont'>Home</p>
                                </a></li>
                            <li><span className="text-gray-500 mx-2">/</span></li>
                            <li><a href="#" className="text-cyan-600 hover:text-blue-700">
                                    <p className='RobotoMediumFont'>Library</p>
                                </a></li>
                            <li><span className="text-gray-500 mx-2">/</span></li>
                            <li className="text-gray-500"><p className='RobotoMediumFont'>Data</p></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div> */}
        <div className="flex justify-center">
            <div  style={{width: '1400px'}}>
                <div className="grid grid-rows-30 grid-flow-col">
                    <div className="row-span-3 w-100%" style={{width: '200px'}}>
                        <div className="w-50 mt-5 leftSideFilters" style={{height: "700px"}}>
                            <p className='RobotoBoldFont tracking-tight '>Filters</p>
                            <div className="w-50">
                                <LightButton isActive={false} classNamesButton='w-50 h-7' title="Reset filters"/>
                            </div>
                            <div className="w-50">
                                <LightButton classNamesButton="w-50 h-7" title="Apply filters (2)"/>
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