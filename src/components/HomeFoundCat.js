import React from "react"


import Cat from "../images/Cat.png";
import ProfileLogout from "./ProfileLogout";

import HeaderWhiteNew from "./HeaderWhiteNew";
import Navigation from "./Navigation";


const HomeFoundCat = () => {
    return (
        <section className="container-fluid" style={ {width: "1336px"}  }>

            <div>
                <HeaderWhiteNew />
            </div>


            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section className="d-flex flex-row col-3">
                    <div className="nav-right">
                        <Navigation />
                    </div>
                </section>




                <section className="col-lg-6">
                     <div>
                         <div className="header-text">Found pet: <span>Cat</span> | Schloss Str, Potsdam</div>
                         <hr/>
                     </div>


                    <div>
                        <img src={Cat} alt=""/>
                    </div>

                    <div>
                        <h4>Cat</h4>
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

                <section className="nav-left">
                    <ProfileLogout/>
                </section>

            </section>






        </section>
    )
}

export default HomeFoundCat