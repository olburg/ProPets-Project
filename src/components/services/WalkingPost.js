import React from "react";
import Navigation from "../Navigation";
import walking1 from "../../images/Services/walking1.png";
import walking2 from "../../images/Services/walking2.png";
import walking3 from "../../images/Services/walking3.png";
import Puppy from "../../images/Puppy.png"

import ProfileLogout from "../ProfileLogout";
import HeaderWhite from "../HeaderWhite";
import {NavLink} from "react-router-dom";


const WalkingPost = () => {
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
                    <h3 className="header-text">Walking. No time tonight? We have a solution!</h3>


                    <div className="">

                        <div className="d-flex flex-row">
                            <div>
                                <img src={Puppy} alt="#" className="photo-avatar"/>
                            </div>
                            <div>
                                <div className="header-text" style={ {margin: "0", fontSize: "15px"} }>John Goodboy</div>
                                <p>6 April, 10:15</p>
                            </div>

                        </div>



                        <div className="">

                            <div>
                                <img src={walking1} alt=""/>
                            </div>

                            <div >
                                <div className="">
                                    <div>The quick, brown fox jumps over a lazy dog.</div>
                                    <div>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                                    </div>

                                </div>

                                <div>
                                    <span style={ { color: "#06B2BB" } }>Contacts:</span> Oliver Platz, 14193 Berlin | dogwalks@mail.com | 3531 264563890
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

export default WalkingPost