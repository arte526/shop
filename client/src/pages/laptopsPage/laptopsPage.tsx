import React from 'react';
import './laptopsPage.scss';
import Good from '../../components/Good/Good';

const GoodsPage = () => {

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
                        arr.map(el => {
                        return (
                            <li>
                                <div className="w-60 h-80">
                                    {el}
                                </div>
                            </li>
                        )})
                    }
                </ul>
            </div>
        </div>
    </>
    )
}

export default GoodsPage