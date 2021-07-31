import React from "react";
import Navigation from "../Navigation";
import vethelp2 from "../../images/Services/vethelp2.png";

import Puppy from "../../images/Puppy.png"

import ProfileLogout from "../ProfileLogout";
import HeaderWhite from "../HeaderWhite";



const VetHelpPost = () => {
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

                        <div className="d-flex flex-row">
                            <div>

                            </div>
                            <div>
                                <div className="header-text" style={ {margin: "0", fontSize: "15px"} }>John Goodboy</div>
                                <p>6 April, 10:15</p>
                            </div>

                        </div>



                        <div className="">

                            <div>
                                <img src={vethelp2} alt=""/>
                            </div>

                            <div >
                                <div className="">
                                    <div>Tierklinik</div>
                                    <div>
                                        Tierklinik Steifensandstraße 7 14057 Berlin-Charlottenburg Telefon: (030) 325 56 89 Telefax: (030) 981 96 893 kleintierpraxisamlietzensee@gmail.com Öffnungszeiten Montag bis Samstag 10:00 - 12:00 Uhr Montag bis Freitag 16:00 - 20:00 Uhr Mittwochnachmittag geschlossen Termine nach Vereinbarung </div>

                                </div>

                                <div>
                                    <a style={ { color: "#06B2BB" } }>www.kleintierpraxis-am-lietzensee.de</a>
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

export default VetHelpPost