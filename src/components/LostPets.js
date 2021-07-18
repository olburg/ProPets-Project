import React from "react";
import Logo from "../images/Group1.svg"
import { NavLink } from "react-router-dom";
import BigDog from "../images/BigDog.png";
import Puppy from "../images/Puppy.png";
import Dog from "../images/Dog.png";
import Cat from "../images/Cat.png";
import Parrot from "../images/Parrot.png";
import Cat1 from "../images/Cat1.png";
import Header from "./Header";
import Nav from "./Nav";



const LostPets = () => {
    return (

        <section>
            <div>
                <Header />
            </div>
            <div>
                <Nav />
            </div>

            <div><span>Lost pets</span></div>

            <div>
                Would you like to publish a post? <NavLink exact={true} to="/signIn">Join</NavLink> the our community!
            </div>

            <div className="frow">
                <div>
                    <h3>Uncle Sam</h3>
                    <p>Oliver Platy, Berlin</p>
                    <img src={BigDog} alt="#"/>
                    <NavLink exact={true} to="/LostDog">view details>></NavLink>
                </div>
                <div>
                    <h3>John Goodboy</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src={Puppy} alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Janneta</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src={Dog} alt="#"/>
                    <a href="">view details>></a>
                </div>

            </div>

            <div className="frow">
                <div>
                    <h3>Leonard</h3>
                    <p>Oliver Platy, Berlin</p>
                    <img src={Cat} alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Chick</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src={Parrot} alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Basiliy</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src={Cat1} alt="#"/>
                    <a href="">view details>></a>
                </div>

            </div>
        </section>



    )

}

export default LostPets