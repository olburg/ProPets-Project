import React from "react";
import { NavLink } from "react-router-dom";
import FontAwesome from 'react-fontawesome'

import Logo from "../images/Group1.svg"
import Dog from "../images/Image2.jpg"
import Pets from "../images/8347.png"
import Header from "./Header";



const Start = () => {
   
    return (
        <section className="start">
            <Header />
            {/*<nav>*/}
            {/*    <header className="header">*/}
            {/*    <img src={Logo} alt="#"/>*/}

            {/*    <NavLink exact={true} to="/signIn">SignIn</NavLink>*/}
            {/*    </header>*/}
            {/*</nav>*/}


            <section className="welcome-wrapper">
                <div className="welcome">
                    <h1 className="welcome-text"> Welcome to your <span>pawfessional</span> community</h1>
                    <div className="wanttojoin">
                        I’m okay, just want to <NavLink exact={true} to="/signIn">Join</NavLink> the pawsome community!
                    </div>
                </div>

                <div className="dog-wrapper">
                    <div className="dog"> </div>
                    {/*<div className="dog"><img src={Dog} className="dog-foto"/></div>*/}

                </div>


            </section>

            <section>
                <NavLink exact={true} to="/LostPets" style={{ textDecoration: "none", color: "green" }}>I lost my pet!</NavLink>
                <NavLink exact={true} to="/FoundPets" activeStyle={{color: ""}}>I found a pet!</NavLink>
            </section>

            <section className="about">
                <p className="about-text">Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys.</p>
            </section>


            <section>
                <div>
                    <div className=""><img src={Pets} alt="#"/></div>
                <h3>
                    Here is collected everything that your pet needs:
                </h3>
                <div>
                    <ul>
                        <li>professional veterinarian tips;</li>
                        <li>useful information about education and care;</li>
                        <li>information about pet-sitting and walking service;</li>
                        <li>and of course, great communication with new friends in your social network!</li>
                    </ul>

                    <div>
                        Make an account and <NavLink exact={true} to="/signIn">Join</NavLink> to us!
                    </div>

                </div>
            </div>
            </section>
            <section className="footer">
                <div><img src={Logo} alt="#"  /></div>
                <div>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</div>
            </section>



        </section>
    )
}

export default Start
