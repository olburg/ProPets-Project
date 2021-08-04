import React from "react";



import BigDog from "../images/BigDog.png"
import ProfileLogout from "./ProfileLogout";
import Navigation from "./Navigation";

import HeaderWhiteNew from "./HeaderWhiteNew";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LostDog = () => {
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


                <section className="col-lg-6" style={ {marginTop: "20px"} }>
                    <div>
                        <h3>Lost pet: <span>Uncle Sam</span> | <FontAwesomeIcon icon={faMapMarker} style={ {marginRight: "10px", color: "#06B2BB"} }/> Schloss Str, Potsdam</h3>
                        <hr/>
                    </div>

                    <div className="lost-found-description">
                        <div>
                            <img src={BigDog} alt="" className="found-cat"/>
                        </div>

                        <div>
                        <div>
                            <h4 className="header-text">Dog, Golden retriever</h4>
                            <p>Dec 12, 2019</p>
                        </div>

                        <div>
                            <p>Color: golden</p>
                            <p>Sex: male</p>
                            <p>Height: 45 cm</p>
                        </div>

                        <div>
                            Distinctive features: blue collar with stars, no left ear, damaged tail. Junk MTV quiz graced by
                        </div>

                     </div>


                </div>

                    <div>
                    Description: brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. raced by fox whelps. Bawds jog, flick quartz, vex nymphs.
                </div>
                    <div>
                        <p>Owner: Anna Smith</p>
                        <p>Phone: 000 000 0000</p>
                        <p>e-mail: anna@mail.com</p>
                    </div>
            </section>

            <section className="nav-right">
                <ProfileLogout/>
            </section>

        </section>


    </section>



    )
}

export default LostDog