import React from "react"
import {NavLink} from "react-router-dom";
import {faPaw, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Nav = () => {
    return (
        <div className="right" style={ {width: "307px", margin: "0"} }>


                    <div className="nav-item">
                        <NavLink exact={true} to="/LostPets" style={ {color:"#FFFFFF"} }><FontAwesomeIcon icon={faSearch} style={ {color: "white", marginRight: "10px"} }/>  Lost</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink exact={true} to="/FoundPets" style={ {color:"#FFFFFF", fontStyle: "bold"} }><FontAwesomeIcon icon={faPaw} style={ {color: "white", marginRight: "10px"} }/>Found</NavLink>
                    </div>



            {/*<div className="nav-left">*/}
            {/*    /!*<p>green background</p>*!/*/}
            {/*</div>*/}

        </div>

    )
}

export default Nav