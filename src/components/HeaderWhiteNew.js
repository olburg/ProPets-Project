import React from "react";
import {NavLink} from "react-router-dom";
import LogoGreen from "../images/LogoGreen.svg";



import {faBorderNone} from "@fortawesome/free-solid-svg-icons";



const HeaderWhiteNew = () => {
    return (
        <div className="header-white body">
            <div className="header-green-wrapper">

                <div className="header-logo-green"><NavLink exact={true} to="/"><img src={LogoGreen} alt="#"/></NavLink></div>


                <div className="d-flex frow">
                    <div className="header-button-signin"><NavLink exact={true} to="/AddNewLost"><div className="addnewpost"> I lost a pet</div></NavLink></div>
                    <div className="header-button-signin"><NavLink exact={true} to="/AddNewFound"><div className="addnewpost"> I found a pet</div></NavLink></div>

                </div>




            </div>
        </div>
    )

}

export default HeaderWhiteNew