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

import HeaderStart from "./HeaderStart";



const LostPets = () => {
    return (

        <section className="container-fluid" style={ {width: "1336px"}  }>
            <div >
                <HeaderStart />
            </div>

            <section className="container d-flex row-cols-lg-3 row-cols-md-3 col-4" style={ {width: "1336px"}  }>

                <section className="d-flex flex-row col-3" >
                    <div className="col-4">
                        <Nav />
                    </div>

                </section>

                <section className="col col-6" >
                    <div className="header-text">Lost pets</div>
                    <hr/>

                    <div style={ {fontSize: "12px", marginBottom: "30px" } }>
                        Would you like to publish a post? <NavLink exact={true} to="/signIn"><span style={{color: "#06B2BBCC"}}>JOIN</span></NavLink> the our community!
                    </div>

                    <div className="frow">
                        <div>
                            <h4>Uncle Sam</h4>
                            <p>Oliver Platy, Berlin</p>
                            <img src={BigDog} alt="#"/>
                            <div>
                                <NavLink exact={true} to="/LostDog">view details>></NavLink>
                            </div>

                        </div>
                        <div>
                            <h4>John Goodboy</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Puppy} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>
                        </div>
                        <div>
                            <h4>Janneta</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Dog} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>
                        </div>

                    </div>

                    <div className="frow">
                        <div>
                            <h4>Leonard</h4>
                            <p>Oliver Platy, Berlin</p>
                            <img src={Cat} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>
                        </div>
                        <div>
                            <h4>Chick</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Parrot} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>
                        </div>
                        <div>
                            <h4>Basiliy</h4>
                            <p>Schloss Str, Potsdam</p>
                            <img src={Cat1} alt="#"/>
                            <div>
                                <a href="#">view details>></a>
                            </div>
                        </div>

                    </div>
                </section>

                {/*<section className=" col-4" style={ {width: "307px", backgroundColor: "#06B2BBCC", justifyContent: "flex-start"} }>*/}
                {/*    <div></div>*/}
                {/*</section>*/}

                <section className="nav-right col-3">
                    {/*<div></div>*/}
                </section>

            </section>










        </section>



    )

}

export default LostPets