import React from "react";
import Header from "./Header";
import Nav from "./Nav";

import BigDog from "../images/BigDog.png"

const LostDog = () => {
    return (
        <section>
            <section>
                <Header />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section>
                    <Nav />
                </section>


                <section>
                    <div>
                        <h3>Lost pet: Uncle Sam | Schloss Str, Potsdam</h3>
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


                <section>
                    <div style={ {background:"green"} }>Background: green</div>
                </section>

            </section>
        </section>



    )
}

export default LostDog