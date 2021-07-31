import React from "react";



import BigDog from "../images/BigDog.png"
import ProfileLogout from "./ProfileLogout";
import Navigation from "./Navigation";

import HeaderWhiteNew from "./HeaderWhiteNew";

const LostDog = () => {
    return (
        <section>
            <section>
                <HeaderWhiteNew />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section className="nav-right">
                    <Navigation />
                </section>


                <section>
                    <div>
                        <h3>Lost pet: <span>Uncle Sam</span> | Schloss Str, Potsdam</h3>
                    </div>
                    <div>
                        <img src={BigDog} alt=""/>
                    </div>

                    <div>
                        <h4>Dog, Golden retriever</h4>
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

export default LostDog