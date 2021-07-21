import React from "react";
import HeaderWhite from "./HeaderWhite";
import BigDog from "../images/BigDog.png";
import PostPhoto from "../images/PostPhoto.png";
import {NavLink} from "react-router-dom";
import ProfileLogout from "./ProfileLogout";




const MainPost = () => {
    return(
        <section>

            <section>
                <HeaderWhite />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section>
                    {/*<Navigation/>*/}
                </section>

                <section>
                    <div>
                        <img src={BigDog} alt=""/>
                        <h4>Uncle Sam</h4>
                        <p>5 April, 14:00</p>
                        <img src={PostPhoto} alt=""/>
                        <div>
                            Fox nymphs grab quick-jived waltz. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>

                        <h4>Comments</h4>
                        <div>add comments</div>

                        <h4>John Goodboy | 6 April, 10:15</h4>
                        <div>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                            software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <input type="text" name="comment" placeholder="type you comment"/>
                    </div>
                </section>

                <section>
                    <ProfileLogout/>
                </section>

            </section>
</section>








    )
}

export default MainPost