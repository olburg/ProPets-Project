import React from "react";
import {NavLink} from "react-router-dom";
import {fas, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const ProfileLogout = () => {
    return (

        <section className="container">


            <div>
                <NavLink exact={true} to="/Profile" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif"} }>
                    {/*<img src="" alt="#"/>*/}
                    <p>Anna Smith</p>
                </NavLink>
            </div>


            <div className="nav-fill">
                <NavLink exact={true} to="/" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif"} }><FontAwesomeIcon icon={faSignOutAlt} />LogOut</NavLink>
            </div>


        </section>

    )
}

export default ProfileLogout