import React from "react";
import {NavLink} from "react-router-dom";
import LogoGreen from "../images/LogoGreen.svg";







const HeaderStart = () => {
    return (
        <div className="header-white">
            <div className="header-green-wrapper">

                <div className="header-logo-green"><NavLink exact={true} to="/"><img src={LogoGreen} alt="#"/></NavLink></div>


            </div>
        </div>
    )

}

export default HeaderStart