import React from "react"
import {NavLink} from "react-router-dom";



const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav-right">
                <div>
                    <div className="nav-item">
                        <NavLink exact={true} to="/LostPets">Lost</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink exact={true} to="/FoundPets">Found</NavLink>
                    </div>
                </div>
            </div>

            {/*<div className="nav-left">*/}
            {/*    /!*<p>green background</p>*!/*/}
            {/*</div>*/}

        </nav>

    )
}

export default Nav