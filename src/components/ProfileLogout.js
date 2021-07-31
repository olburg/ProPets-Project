import React from "react";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaw, faSignOutAlt} from "@fortawesome/free-solid-svg-icons";


const ProfileLogout = () => {
    return (

        <section>

            <div className="container" style={ {color: "white"} }>
                <div style={ {color: "white", marginBottom: "10px"}  }>
                    <hr/>
                    <NavLink exact={true} to="/Profile">
                        {/*<img src="" alt="#"/>*/}
                        <p>Anna Smith</p>
                    </NavLink>
                    <hr/>
                </div>


                <div>

                    <NavLink exact={true} to="/"><div ><FontAwesomeIcon icon={faSignOutAlt} />LogOut</div></NavLink>

                </div>
            </div>







        </section>

    )
}

export default ProfileLogout