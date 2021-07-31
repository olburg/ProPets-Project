import React from "react";
import Navigation from "../Navigation";
import vethelp1 from "../../images/Services/vethelp1.png";
import vethelp2 from "../../images/Services/vethelp2.png";
import vethelp3 from "../../images/Services/vethelp3.png";


import ProfileLogout from "../ProfileLogout";
import HeaderWhite from "../HeaderWhite";
import {NavLink} from "react-router-dom";


const VetHelp = () => {
    return (

        <section >
            <section>
                <HeaderWhite />
            </section>

            <section className="container-fluid d-flex cols-lg-3 cols-md-3">
                <section className="nav-right">
                    <Navigation />
                </section>

                <section className="container" style={ {margin: "0"} }>
                    <h3 className="header-text">VetHelp. They deserve it.</h3>


                    <div className="">
                        <div className="frow d-flex justify-content-around">
                            <div>
                                <img src={vethelp1} alt=""/>
                            </div>

                            <div >
                                <div >
                                    <div className="header-text" >Friedhelm Hellwig Tierarzt</div>
                                    <div>
                                        <div>Adresse: Steifensands 7, 14057 Berlin </div>
                                    </div>
                                    <div>

                                        <div>Öffnungszeiten: Montag bis Samstag 10:00 - 12:00 Uhr </div>
                                        <div>Montag bis Freitag 16:00 - 20:00 Uhr</div>
                                    </div>
                                    <a href="">view details>></a>

                                </div>






                            </div>
                        </div>

                        <div className="frow d-flex justify-content-around">
                            <div>
                                <img src={vethelp2} alt=""/>
                            </div>

                            <div >
                                <div >
                                    <div className="header-text" >Tierklinik</div>
                                    <div>
                                        <div>Adresse: Steifensands 7, 14057 Berlin</div>
                                    </div>
                                    <div>

                                        <div>Öffnungszeiten: Montag bis Samstag 10:00 - 12:00 Uhr </div>
                                        <div>Montag bis Freitag 16:00 - 20:00 Uhr</div>
                                    </div>

                                </div>

                                <NavLink exact={true} to="/VetHelpPost">view details>></NavLink>



                            </div>
                        </div>



                        <div className="frow d-flex justify-content-around">
                            <div>
                                <img src={vethelp3} alt=""/>
                            </div>

                            <div >
                                <div >
                                    <div className="header-text" >Tierklinik</div>
                                    <div>
                                        <div>Adresse: Steifensands 7, 14057 Berlin</div>
                                    </div>
                                    <div>

                                        <div>Öffnungszeiten: Montag bis Samstag 10:00 - 12:00 Uhr </div>
                                        <div>Montag bis Freitag 16:00 - 20:00 Uhr</div>
                                    </div>
                                    <a href="">view details>></a>

                                </div>






                            </div>
                        </div>


                    </div>


                </section>

                <section  className="nav-left" >
                    <ProfileLogout/>
                </section>


            </section>







        </section>




    )
}

export default VetHelp