import React from "react";
import './Good.scss'

import laptopSkelet from "../../assets/icons/laptopskelet.png";
import iconStarRating from "../../assets/icons/icon-starRating";


const Good: React.FC = () => {

    const testDesc = 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On 16GB x 2 channel';
    const priceOfGood = 499.00;
    const ratingOfGood = 4.26;

    return(
        <>
            <div className="w-55 h-80 bg-white">
                <div className="mx-5 flex flex-col justify-between">
                    <div className="">
                        <img src={laptopSkelet}/>
                    </div>
                    <div>
                        <ul className="flex flex-row justify-between">
                            <li key='9i23j9icsdj9m2' className="flex flex-row">
                                <ul className="flex flex-row content-center">
                                    <li key='akjsdajsdi1jd9jisd' className="w-3 h-3 mt-1">{iconStarRating}</li>
                                    <li key='wd12edsaf31' className="w-3 h-3 mt-1">{iconStarRating}</li>
                                    <li key='akjsd423rf32f23f9jisd' className="w-3 h-3 mt-1">{iconStarRating}</li>
                                    <li key='akjsdh5654hg4sd' className="w-3 h-3 mt-1">{iconStarRating}</li>
                                    <li key='akjsdahsd' className="w-3 h-3 mt-1">{iconStarRating}</li>
                                </ul>
                            </li>
                            <li key='ij239i0cjsdm3m'>
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

                </div>
            </div>
        </>
    );
}

export default Good;