import React from "react"

import Nav from "./Nav";
import Cat from "../images/Cat.png";

import HeaderStart from "./HeaderStart";


const FoundCat = () => {
    return (
        <section>


            <section>
                <HeaderStart />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">
                <section>
                    <Nav />
                </section>


                <section>
                    <div>
                        <h3 className="header-text">Found pet: <span style={ {color: "black"} }>Cat </span> | Schloss Str, Potsdam</h3>
                    </div>
                    <div>
                        <img src={Cat} alt=""/>
                    </div>

                    <div>
                        <h4 className="header-text">Cat</h4>
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

                </section>


            </section>






        </section>
    )
}

export default FoundCat