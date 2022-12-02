import React from "react";
import './Good.scss'

import { Button } from "@material-tailwind/react";

import iconAvailable from "../../assets/icons/icon-Available";
import laptopSkelet from "../../assets/icons/laptopskelet.png";
import iconStarRating from "../../assets/icons/icon-starRating";


const Good: React.FC = () => {

    const testDesc = 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On 16GB x 2 channel';

    const priceOfGood = 499.00;
    const ratingOfGood = 4.26;

    return(
        <>
            <div className="w-60 h-80">
                <div className="mx-5 flex flex-col justify-between">
                    <div className="">
                        <img src={laptopSkelet}/>
                    </div>
                    <div>
                        <ul className="flex flex-row justify-between">
                            <li className="flex flex-row">
                                <ul className="flex flex-row content-center">
                                    <li className="w-3 h-3 mt-1">{iconStarRating}</li>
                                    <li className="w-3 h-3 mt-1">{iconStarRating}</li>
                                    <li className="w-3 h-3 mt-1">{iconStarRating}</li>
                                    <li className="w-3 h-3 mt-1">{iconStarRating}</li>
                                    <li className="w-3 h-3 mt-1">{iconStarRating}</li>
                                </ul>
                            </li>
                            <li>
                                <p className="fontFamily text-sm">Reviews (4)</p>
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <p className="fontFamily text-base mt-2">{testDesc.length > 35? (testDesc.slice(0,35) + '...') : (testDesc)}</p>
                    </div>
                    <div>
                        <p className="fontFamily text-xl font-bold mt-2">${priceOfGood}</p>
                    </div>
                    <div className="flex justify-center">
                        <div className="">
                            <button className="inline-block px-6 py-2.5 bg-gray-200 text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out">
                                <p className="fontFamily font-medium">Add to cart</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Good;