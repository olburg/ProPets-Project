import React from "react";
import {NavLink} from "react-router-dom";
import LogoGreen from "../images/LogoGreen.svg";
import Signin from "../images/Signin.svg";

import AddNewPost from "./AddNewPost";
import {faBorderNone} from "@fortawesome/free-solid-svg-icons";



const HeaderWhite = () => {
    return (
        <div className="header-white body" style={ {width: "1336px"} }>
            <div className="header-green-wrapper">

                <div className="header-logo-green"><NavLink exact={true} to="/Home"><img src={LogoGreen} alt="#"/></NavLink></div>

                <div className="d-flex frow">
                    <div className="header-button-signin"><NavLink exact={true} to="/AddNewPost"><div className="addnewpost"> + Add new</div></NavLink></div>
                </div>



            </div>
        </div>
    )

}

export default HeaderWhite