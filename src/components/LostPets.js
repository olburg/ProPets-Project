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
import HeaderWhite from "./HeaderWhite";



const LostPets = () => {
    return (

        <section>


            <section>
                <HeaderWhite />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">
                <section>
                    <Nav />
                </section>


                <section>
                    <div><span>Lost pets</span></div>

                    <div>
                        Would you like to publish a post? <NavLink exact={true} to="/signIn">Join</NavLink> the our community!
                    </div>

                    <div className="frow">
                        <div>
                            <h4>Uncle Sam</h4>
                            <p>Oliver Platy, Berlin</p>
                            <img src={BigDog} alt="#"/>
                            <NavLink exact={true} to="/LostDog">view details>></NavLink>
                        </div>
                        <div>
                            <h4>John Goodboy</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Puppy} alt="#"/>
                            <a href="">view details>></a>
                        </div>
                        <div>
                            <h4>Janneta</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Dog} alt="#"/>
                            <a href="">view details>></a>
                        </div>

                    </div>

                    <div className="frow">
                        <div>
                            <h4>Leonard</h4>
                            <p>Oliver Platy, Berlin</p>
                            <img src={Cat} alt="#"/>
                            <a href="">view details>></a>
                        </div>
                        <div>
                            <h4>Chick</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Parrot} alt="#"/>
                            <a href="">view details>></a>
                        </div>
                        <div>
                            <h4>Basiliy</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Cat1} alt="#"/>
                            <a href="">view details>></a>
                        </div>

                    </div>
                </section>

                <section>
                    <div>Background: green</div>
                </section>
            </section>







        </section>



    )

}

export default LostPets