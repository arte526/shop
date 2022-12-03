import React, { useState } from 'react';
import './laptopsPage.scss';
import Good from '../../components/Good/Good';

const LaptopsPage = () => {

    const [GoodHover, useGoodHoverUpdate] = useState(false);

    // const HoverGood = (event: React.SyntheticEvent<EventTarget>, status: boolean) => {
    //     useGoodHoverUpdate(status);
    //     console.log(event);
    // }

    const arr = []; 
    for(let i = 0; i < 25; i += 1){
        arr.push(<Good/>)
    }

    return(
    <>
        <div className="flex justify-center">
            <div className='wrapperLaptopsPage'>
                <ul className='w-100% grid grid-cols-5 gap-10 justify-between'>
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
    </>
    )
}

export default LaptopsPage