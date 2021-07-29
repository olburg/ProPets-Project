import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import FontAwesome from 'react-fontawesome'

import Logo from "../images/Group1.svg"
import LogoPet from "../images/LogoPet.svg"
import Dog from "../images/Image2.jpg"
import Pets from "../images/8347.png"
import Header from "./Header";




const Start = () => {


    const [lostButton, setLostButton] = useState("I lost my pet!")
    const [foundButton, setFoundButton] = useState("I found a pet!")


    return (

        <section className="start">
            <Header />



            <section className="welcome-wrapper">
                <div className="welcome">
                    <h1 className="welcome-text"> Welcome to your <span>pawfessional</span> community</h1>
                    <div className="wanttojoin">
                        I’m okay, just want to <NavLink exact={true} to="/signIn"><span style={ {  color: "#06B2BB", textDecoration: "none", fontStyle: "bold"}  }>JOIN</span></NavLink> the pawsome community!
                    </div>
                </div>

                <div className="dog-wrapper">
                    <div className="dog"> </div>
                    {/*<div className="dog"><img src={Dog} className="dog-foto"/></div>*/}

                </div>

                <section className="buttons">
                    <div className='lost_button' onMouseEnter={ ()=> setLostButton("Click to find!") } onMouseOut={ ()=> setLostButton("I lost my pet!")}>
                        <NavLink exact={true} to="/LostPets">
                            {lostButton}
                            <img src={LogoPet} className="logo_pets" style={ {width: "200px", bottom: "0"} }/>
                        </NavLink>
                    </div>

                    <div className="found_button" onMouseEnter={ ()=> setFoundButton("What to do?") } onMouseOut={ ()=> setFoundButton("I found a pet!")}>
                        <div onMouseEnter={ ()=> setFoundButton("What to do?") } onMouseOut={ ()=> setFoundButton("I found a pet!")}>
                            <NavLink exact={true} to="/FoundPets"   >{foundButton}</NavLink>
                        </div>
                    </div>
                </section>
            </section>



            <section className="about">
                <div className="about-text" style={ {fontFamily: "Montserrat, sans-serif"}  }>Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys.</div>
            </section>


            <section style={ {padding: "20px 20px" }  }>
                <div className="d-flex col-12 justify-content-between" style={ {width: "100%" }}>
                    <div className="">
                        <img src={Pets} alt="#"/>
                    </div>



                    <div className="service-list">
                        <h3 className="header-text">
                            Here is collected everything that your pet needs:
                        </h3>
                        <div>
                            <ul>
                                <li style={{ textDecorationColor: "#06B2BB"}  }>professional veterinarian tips;</li>
                                <li>useful information about education and care;</li>
                                <li>information about pet-sitting and walking service;</li>
                                <li>and of course, great communication with new friends in your social network!</li>
                            </ul>
                        </div>

                        <div className="wanttojoin-footer">
                            Make an account and <NavLink exact={true} to="/signIn"><span style={ {  color: "#06B2BB", textDecoration: "none", fontStyle: "bold"}  }>JOIN</span></NavLink> to us!
                        </div>
                    </div>
                </div>
            </section>



            <section className="footer d-flex col-12 justify-content-between">
                <div><img src={Logo} alt="#"  /></div>
                <div style={ {color: "white", fontSize: "13px"}  }>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</div>
            </section>



        </section>
    )
}

export default Start