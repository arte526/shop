import React from "react";
import './HeadSite.scss'

import iconSite from '../../assets/icons/icon-site';
import iconSearch from "../../assets/icons/icon-search";
import iconCart from "../../assets/icons/icon-cart";

const HeadSite = () => {
    return (
        <>
            <div className="headerApp justify-center">
                <div className="container1400">
                    <ul className="navBar justify-between">
                        <div className="leftSide">
                            <li className="logo">
                                {iconSite}
                            </li>
                            <li className="item">
                                <p className="titlesTopics">Laptops</p>
                            </li>
                            <li className="item">
                                <p className="titlesTopics">Desktop PCs</p>
                            </li>
                            <li className="item">
                                <p className="titlesTopics">Networking Devices</p>
                            </li>
                            <li className="item">
                                <p className="titlesTopics">Printers & Scanners</p>
                            </li>
                            <li className="item">
                                <p className="titlesTopics">PC Parts</p>
                            </li>
                            <li className="item">
                                <p className="titlesTopics">All Other Products</p>
                            </li>
                        </div>
                        <div className="rightSide">
                            <li className="item">
                                {iconSearch}
                            </li>
                            <li className="item">
                                {iconCart}
                            </li>
                            <li className="item">
                                <div className="w-10 h-10 bg-black rounded-full"></div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeadSite;