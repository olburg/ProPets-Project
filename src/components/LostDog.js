import React from "react"

import Nav from "./Nav";
import BigDog from "../images/BigDog.png";

import HeaderStart from "./HeaderStart";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker} from "@fortawesome/free-solid-svg-icons";



const FoundCat = () => {
    return (
        <section className="container-fluid" style={ {width: "1366px"}  }>
            <div>
                <HeaderStart />
            </div>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section className="d-flex flex-row col-3" >
                    <div className="col-4" style={ {width: "400px"}  }>
                        <Nav />
                    </div>

                </section>

                <section className="col-lg-6 " style={ {paddingRight: "10px"}  }>
                    <div>
                        <div className="header-text">Lost pet: <span style={ {color: "black"} }>Dog, Golden retriever </span> | <FontAwesomeIcon icon={faMapMarker} style={ {marginRight: "10px", color: "#06B2BB"} }/>Schloss Str, Potsdam</div>
                        <hr/>
                    </div>

                    <div className="lost-found-description" >
                        <div >
                            <img src={BigDog} alt="" className="lost-dog"/>
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
                    <div></div>
                </section>

            </section>
        </section>
    )
}

export default FoundCat