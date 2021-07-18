import React from "react";


import { NavLink } from "react-router-dom";
import Header from "./Header"
// import Logo from "../images/Group1.svg"
import BigDog from "../images/BigDog.png"
import Puppy from "../images/Puppy.png"
import Dog from "../images/Dog.png"
import Cat from "../images/Cat.png"
import Parrot from "../images/Parrot.png"
import Cat1 from "../images/Cat1.png"
import Nav from "./Nav";



const FoundPets = () => {
    return (

        <section>
            <div>
                <Header />
                {/*<header className="header">*/}
                {/*    /!*<a href={Home}><img src={Logo} alt="#"/> </a>*!/*/}
                {/*    /!*<NavLink exact={true} to="/Main"><img src={Logo} alt="#"/></NavLink>*!/*/}
                {/*</header>*/}
            </div>

            <div>
                <Nav />
                {/*<NavLink exact={true} to="/LostPets">Lost</NavLink>*/}
                {/*<br/>*/}
                {/*<NavLink exact={true} to="/FoundPets">Found</NavLink>*/}
            </div>




            <h3><span>Found pets</span></h3>

            <div>
                Would you like to publish a post? <NavLink exact={true} to="/signIn">Join</NavLink> the our community!
            </div>

            <div className="frow">
                <div>
                    <h3>Big dog</h3>
                    <p>Oliver Platy, Berlin</p>
                    <img src={BigDog} alt="#"/>
                    <a href="/FoundCat">view details>></a>
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
                    <NavLink exact={true} to="/FoundCat">view details>></NavLink>
                    {/*<a href="">view details>></a>*/}
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