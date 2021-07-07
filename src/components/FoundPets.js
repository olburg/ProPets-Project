import React from "react";

import { NavLink } from "react-router-dom";

import Home from "./Home";

const FoundPets = () => {
    return (
        <section>
            <header>
                <a href=""><img src="../images/Group 1.svg" alt="#"/></a>
            </header>

            <NavLink exact={true} to="/LostPets">Lost</NavLink>
            <NavLink exact={true} to="/FoundPets">Found</NavLink>

            <div><span>Found pets</span></div>

            <div>
                Would you like to publish a post? <NavLink exact={true} to="/signIn">Join</NavLink> the our community!
            </div>

            <div>
                <div>
                    <h3>Big dog</h3>
                    <p>Oliver Platy, Berlin</p>
                    <img src="../images/Group 1.svg" alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Puppy</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src="../images/Group 1.svg" alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Dog</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src="../images/Group 1.svg" alt="#"/>
                    <a href="">view details>></a>
                </div>

            </div>

            <div>
                <div>
                    <h3>Cat</h3>
                    <p>Oliver Platy, Berlin</p>
                    <img src="../images/Group 1.svg" alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Parrot</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src="../images/Group 1.svg" alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Cat</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src="../images/Group 1.svg" alt="#"/>
                    <a href="">view details>></a>
                </div>

            </div>
        </section>


    )

}

export default FoundPets