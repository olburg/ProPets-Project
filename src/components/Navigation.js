import React, {Fragment} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDog,
    faHome,
    faHotel,
    faPaw,
    faSearch, faStethoscope,
    faWalking
} from "@fortawesome/free-solid-svg-icons";




const Navigation = () => {

    return (
        <section  >

        <section className="nav-wrapper">
            <section className="nav-item-new services">
                <NavLink exact={true} to="/Home" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat"} }><FontAwesomeIcon icon={faHome} />    Home</NavLink>
            </section>

            <section className="nav-item-new">
            <NavLink exact={true} to="/HomeLost" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat"} }><FontAwesomeIcon icon={faSearch} />    Lost</NavLink>
            </section>


            <section className="nav-item-new mb-3">
                <NavLink exact={true} to="/HomeFound" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat"} } ><FontAwesomeIcon icon={faPaw} />    Found</NavLink>
            </section>


            <div style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat"} }>SERVICES</div>
            <hr style={ {color: "white"} }/>
            <div className="nav-item-new">
                <div className="nav-item-new" style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat"} }><FontAwesomeIcon icon={faHotel} style={ {marginRight: "10px"} }/>
                      Hotels
                </div>

                <NavLink exact={true} to="/Walking" className='nav-item-new' style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat"} }><FontAwesomeIcon icon={faWalking} style={ {marginRight: "10px"} }/>
                         Walking
                </NavLink>

                <NavLink exact={true} to="/Fostering" className='nav-item-new' style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat"} }><FontAwesomeIcon icon={faDog} style={ {marginRight: "10px"} }/>
                    Fostering
                </NavLink>


                <NavLink exact={true} to="/VetHelp" className='nav-item-new' style={ {textDecoration: "none", color: "white", fontSize: "20px", fontFamily: "Montserrat"} }><FontAwesomeIcon icon={faStethoscope} style={ {marginRight: "10px"} }/>
                    VetHelp
                </NavLink>





            </div>

            <hr style={ {color: "white", fontSize: "20px"} }/>







        {/* <ServiceNav/> */}

            </section>




        </section>
    )
}
export default Navigation