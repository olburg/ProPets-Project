import React from "react";
import Navigation from "../Navigation";
import fostering1 from "../../images/Services/fostering1.png";
import fostering2 from "../../images/Services/fostering2.png";
import fostering3 from "../../images/Services/fostering3.png";
import Puppy from "../../images/Puppy.png"

import ProfileLogout from "../ProfileLogout";
import HeaderWhite from "../HeaderWhite";
import {NavLink} from "react-router-dom";


const Fostering = () => {
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
                    <h3 className="header-text">Fostering. In adoption we trust.</h3>


                    <div className="">
                        <div className="frow d-flex justify-content-around">
                            <div>
                                <img src={fostering1} alt=""/>
                            </div>

                            <div >
                                <div className="d-flex flex-row">
                                    <div>
                                        <img src={Puppy} alt="#" className="photo-avatar"/>
                                    </div>
                                    <div>
                                        <div className="header-text" style={ {margin: "0", fontSize: "15px"} }>John Goodboy</div>
                                        <p>6 April, 10:15</p>
                                    </div>

                                </div>


                                <h5>The quick, brown fox jumps over a lazy dog. …view detail</h5>

                                <NavLink exact={true} to="/FosteringPost">view details>></NavLink>
                            </div>
                        </div>

                        <div className="frow d-flex justify-content-around">
                            <div>
                                <img src={fostering2} alt=""/>
                            </div>

                            <div >
                                <div className="d-flex flex-row">
                                    <div>
                                        <img src={Puppy} alt="#" className="photo-avatar"/>
                                    </div>
                                    <div>
                                        <div className="header-text" style={ {margin: "0", fontSize: "15px"} }>John Goodboy</div>
                                        <p>6 April, 10:15</p>
                                    </div>

                                </div>


                                <h5>The quick, brown fox jumps over a lazy dog. …view detail</h5>

                                <a href="">view details>></a>
                            </div>
                        </div>



                        <div className="frow d-flex justify-content-around">
                            <div>
                                <img src={fostering3} alt=""/>
                            </div>

                            <div >
                                <div className="d-flex flex-row">
                                    <div>
                                        <img src={Puppy} alt="#" className="photo-avatar"/>
                                    </div>
                                    <div>
                                        <div className="header-text" style={ {margin: "0", fontSize: "15px"} }>John Goodboy</div>
                                        <p>6 April, 10:15</p>
                                    </div>

                                </div>


                                <h5>The quick, brown fox jumps over a lazy dog. …view detail</h5>

                                <a href="">view details>></a>
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

export default Fostering