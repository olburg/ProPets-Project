import React from "react";


import { NavLink } from "react-router-dom";


import BigDog from "../images/BigDog.png"
import Puppy from "../images/Puppy.png"
import Dog from "../images/Dog.png"
import Cat from "../images/Cat.png"
import Parrot from "../images/Parrot.png"
import Cat1 from "../images/Cat1.png"

import Navigation from "./Navigation";

import ProfileLogout from "./ProfileLogout";
import HeaderWhiteNew from "./HeaderWhiteNew";



const HomeFound = () => {
    return (

        <section >
            <section>
                <HeaderWhiteNew />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">
                <section className="nav-right">
                    <Navigation />
                </section>

                <section>
                    <h3><span>Found pets</span></h3>


                    <div className="frow">
                        <div>
                            <h3>Big dog</h3>
                            <p>Oliver Platy, Berlin</p>
                            <img src={BigDog} alt="#"/>
                            <a href="#">view details>></a>
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
                            <NavLink exact={true} to="/HomeFoundCat">view details>></NavLink>
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

                <section className="nav-left">
                    <ProfileLogout/>
                </section>


            </section>







        </section>
    )

}

export default HomeFound