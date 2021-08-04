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
import HeaderWhite from "./HeaderWhite";
import HeaderStart from "./HeaderStart";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";



const FoundPets = () => {
    return (

        <section className="container-fluid" style={ {width: "1366px"}  }>
            <div>
                <HeaderStart />
            </div>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section className="d-flex flex-row col-3" >
                    <div className="col-4" >
                        <Nav />
                    </div>

                </section>

                <section className="col-lg-6">
                    <div className="header-text">Found pets</div>
                    <hr/>

                    <div style={ {fontSize: "12px", marginBottom: "30px" } }>
                        Would you like to publish a post? <NavLink exact={true} to="/signIn"><span style={{color: "#06B2BBCC"}}>JOIN</span></NavLink> the our community!
                    </div>

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
                                <NavLink exact={true} to="/FoundCat">view details>></NavLink>
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

                <section className="nav-right">
                    <div></div>
                </section>

            </section>







        </section>
    )

}

export default FoundPets