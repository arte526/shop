import React from 'react';
import './goodsPage.scss';
import Good from '../../components/Good/Good';

const GoodsPage = () => {

    return(
        <div className='GoodsPage'>
            <ul className='GoodsPageUl list'>
                <Good/>
                <Good/>
                <Good/>
                <Good/>
                <Good/>
                <Good/>
                <Good/>
                <Good/>
                <Good/>
                <Good/>
                <Good/>
                <Good/>
            </ul>
        </div>
    )
}

export default GoodsPage