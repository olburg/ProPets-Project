import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBorderNone, faHome, faPaw, faSearch} from "@fortawesome/free-solid-svg-icons";



const Navigation = () => {

    return (
        <section  >

        <section className="nav-wrapper">
            <section className="nav-item-new services">
                <NavLink exact={true} to="/Home" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif"} }><FontAwesomeIcon icon={faHome} />    Home</NavLink>
            </section>

            <section className="nav-item-new">
            <NavLink exact={true} to="/HomeLost" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif"} }><FontAwesomeIcon icon={faSearch} />    Lost</NavLink>
            </section>


            <section className="nav-item-new">
                <NavLink exact={true} to="/HomeFound" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif"} }><FontAwesomeIcon icon={faPaw} />    Found</NavLink>
            </section>


            <section className="services">
                <div style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif"} }>SERVICES</div>
                <hr style={ {color: "white"} }/>
                <ul >
                    <div className="nav-item-new" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif"} }>
                        Hotel
                    </div>

                    <div className='nav-item-new' style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif"} }>
                        Walking
                    </div>

                    <div className='nav-item-new' style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat, sans-serif"} }>
                        VetHelp
                    </div>

                </ul>

                <hr style={ {color: "white", fontSize: "20px"} }/>

            </section>



        {/* <ServiceNav/> */}

            </section>




        </section>
    )
}
export default Navigation