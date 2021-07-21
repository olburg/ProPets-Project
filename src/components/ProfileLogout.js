import React from "react";
import {NavLink} from "react-router-dom";


const ProfileLogout = () => {
    return (

        <section>


            <div>
                <NavLink exact={true} to="/Profile">
                    {/*<img src="" alt="#"/>*/}
                    <p>Anna Smith</p>
                </NavLink>
            </div>


            <button type="submit" className="btn btn-success w-40">
                <NavLink exact={true} to="/">LogOut</NavLink>
            </button>


        </section>

    )
}

export default ProfileLogout