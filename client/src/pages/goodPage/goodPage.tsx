import React, {useState} from 'react';
import './goodPage.scss';
import { useSearchParams } from 'react-router-dom';
  
const GoodPage = () => {
    
    const [searchParams, setSearchParams] = useSearchParams();

    return (<>
        <div className={'wrapperGoodPage'}>

        </div>
    </>)
}
  
export default GoodPage