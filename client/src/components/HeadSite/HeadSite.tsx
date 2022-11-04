import React from "react";
import './HeadSite.scss'

import AppLogo from '../../assets/icons/icon-site.png';

const HeadSite = () => {
    return (
        <>
            <header className="header-site">
                <ul className="navBar-ul">
                    <li className="logo-nav-li">
                        <img src={AppLogo} alt="logo" className="img-logo-nav"/>
                    </li>
                    <li className="input-nav-li"></li>
                    <li className="clearsearch-nav-li"></li>
                    <li className="cart-nav-li"></li>
                    <li className="userProfile-nav-li"></li>
                </ul>
            </header>
        </>
    )
}

export default HeadSite;