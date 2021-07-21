import React from "react";

import Puppy from "../images/Puppy.png"
import BigDog from "../images/BigDog.png"
import PostPhoto from "../images/PostPhoto.png"

import {NavLink} from "react-router-dom";
import HeaderWhite from "./HeaderWhite";
import ProfileLogout from "./ProfileLogout";



const Home = ( )=> {
    return(
        <section>

            <section>
                 <HeaderWhite />
             </section>




            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section>
                {/*    <Navigation />*/}
                </section>


                <section >

                    <div>
                        <img src={Puppy} alt=""/>
                        <h5>John Goodboy</h5>
                        <p>6 April, 10:15</p>
                        <p>The quick, brown fox jumps over a lazy dog. …more>></p>
                        <div className="far fa-thumbs-up"> </div>
                    </div>

                    <div>
                        <img src={BigDog} alt=""/>
                        <h5>Uncle Sam</h5>
                        <p>5 April, 14:00</p>
                        <img src={PostPhoto} alt=""/>
                        <p><NavLink exact={true} to="/MainPost">Fox nymphs grab quick-jived waltz. …more>></NavLink></p>
                        <p><NavLink exact={true} to="/MainPost">…more>></NavLink></p>
                    </div>

                    <div>
                        <img src={Puppy} alt=""/>
                        <h5>John Goodboy</h5>
                        <p>6 April, 10:15</p>
                        <p>The quick, brown fox jumps over a lazy dog. </p>
                        <p>…more>></p>
                    </div>

                </section>

                <section>
                    <ProfileLogout/>
                </section>

            </section>
        </section>

    )

}

export default Home