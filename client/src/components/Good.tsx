import React from "react";
import './Good.scss'
import image from './images/skelet.jpg';

const Good: React.FC = () => {

    const testDesc = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum blanditiis inventore ad consectetur vitae obcaecati repellat nihil veniam esse voluptate reprehenderit sed modi iure facilis natus asperiores commodi, ipsa impedit?';

    const priceOfGood = 12312;
    const ratingOfGood = 4.26;
    const defaultGood = 
    <>
        <div className="upperImg-Good">
            <img src={image} alt="" className="imageGood" width={'260px'} height={'260px'}/>
        </div>
        <ul className="Good-Props">
            <li className="description">
                <p className="description-P">
                    {testDesc.length > 50 ? (testDesc.slice(0,50) + '...') : (testDesc)}
                </p>
            </li>
            <div className="price-rating">
                <li className="price">
                    <p className="price-P">{priceOfGood}</p>
                </li>
                <li className="rating">
                    <p className="rating-P">{ratingOfGood}</p>
                </li>
            </div>
        </ul>
    </>

    return(
    <li className="Good">
        <div 
            className={"GoodDiv"}>
            {defaultGood}
        </div>
    </li>
    );
}

export default Good;