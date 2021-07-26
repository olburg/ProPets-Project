import React from "react"
import {NavLink} from "react-router-dom";
import {faPaw, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Nav = () => {
    return (
        <nav >
            <div className="nav-right">
                <div>
                    <div className="nav-item">
                        <NavLink exact={true} to="/LostPets"><FontAwesomeIcon icon={faSearch} />Lost</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink exact={true} to="/FoundPets"><FontAwesomeIcon icon={faPaw} />Found</NavLink>
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