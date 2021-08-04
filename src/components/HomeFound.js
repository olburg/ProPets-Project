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

        <section className="container-fluid" style={ {width: "1336px"}  }>
            <section>
                <HeaderWhiteNew />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section className="d-flex flex-row col-3">
                    <div className="nav-right">
                        <Navigation />
                    </div>
                </section>

                <section className="col-lg-6">
                    <div className="header-text">Found pets</div>
                    <hr/>


                    <div className="frow card-body">
                        <div className=" ">
                            <h4 className="card-title">Big dog</h4>
                            <div>Oliver Platy, Berlin   </div>
                            <img src={BigDog} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>

                        </div>
                        <div>
                            <h4>Puppy</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Puppy} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>
                        </div>
                        <div>
                            <h4>Dog</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Dog} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>
                        </div>

                    </div>

                    <div className="frow">
                        <div>
                            <h4>Cat</h4>

                            <div> Oliver Platy, Berlin</div>

                            <img src={Cat} alt="#"/>
                            <div>
                                <NavLink exact={true} to="/HomeFoundCat">view details>></NavLink>
                            </div>

                        </div>
                        <div>
                            <h4>Parrot</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Parrot} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>
                        </div>
                        <div>
                            <h4>Cat</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Cat1} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>
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