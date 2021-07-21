
import React from "react";
import Logo from "../images/Group1.svg"
import Signin from "../images/Signin.svg"
import {NavLink} from "react-router-dom";

const Header = () => {

    return (
        <div className="header-green">
            <div className="header-green-wrapper">

                <div className="header-logo-white"><NavLink exact={true} to="/"><img src={Logo} alt="#"/></NavLink></div>
                <div className="header-button-signin"><NavLink exact={true} to="/signIn"><img src={Signin} alt="#" style={{margin: true}}/></NavLink></div>

            </div>
        </div>

    )
}

export default Header