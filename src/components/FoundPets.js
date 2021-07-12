import React from "react";

import Home from "./Home"

import { NavLink } from "react-router-dom";
import Logo from "../images/Group1.svg"
import BigDog from "../images/BigDog.png"
import Puppy from "../images/Puppy.png"
import Dog from "../images/Dog.png"
import Cat from "../images/Cat.png"
import Parrot from "../images/Parrot.png"
import Cat1 from "../images/Cat1.png"


const FoundPets = () => {
    return (

        <section>
            <header className="header">
                {/*<a href={Home}><img src={Logo} alt="#"/> </a>*/}
                <NavLink exact={true} to="/Home"><img src={Logo} alt="#"/></NavLink>
            </header>

            <NavLink exact={true} to="/LostPets">Lost</NavLink>
            <br/>
            <NavLink exact={true} to="/FoundPets">Found</NavLink>

            <div><span>Found pets</span></div>

            <div>
                Would you like to publish a post? <NavLink exact={true} to="/signIn">Join</NavLink> the our community!
            </div>

            <div className="frow">
                <div>
                    <h3>Big dog</h3>
                    <p>Oliver Platy, Berlin</p>
                    <img src={BigDog} alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Puppy</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src={Puppy} alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Dog</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src={Dog} alt="#"/>
                    <a href="">view details>></a>
                </div>

            </div>

            <div className="frow">
                <div>
                    <h3>Cat</h3>
                    <p>Oliver Platy, Berlin</p>
                    <img src={Cat} alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Parrot</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src={Parrot} alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Cat</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src={Cat1} alt="#"/>
                    <a href="">view details>></a>
                </div>

            </div>
        </section>
    )

}

export default FoundPets