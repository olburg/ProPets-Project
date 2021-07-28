import React from "react";

import HeaderWhite from "./HeaderWhite"
import ProfileLogout from "./ProfileLogout";
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";



const AddNewPost = () => {
    return (
        <section>
            <section>
                <HeaderWhite />
            </section>

            <section className="d-flex row row-cols-lg-3 row-cols-md-3" >

                <section className="nav-right">
                    <Navigation />
                </section>

                <section className="post-wrapper">
                    <div >
                        <div className="header-text">Your new post! Simply text, add photo and publish.</div>
                    </div>

                    <div className="container">
                        <form action="" className="d-flex row">
                            <div>
                                <label className=" col-form-label">Title</label>
                            </div>
                            <div className="">
                                <input type="text" className="form-control " name="title" placeholder="The quick, brown fox jumps"/>
                            </div>

                            <div>
                                <label className=" col-form-label">Text <br/> up to 1500 char</label>
                            </div>
                            <div className="">
                                <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="10" name="title"
                                       placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                               Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown
                               printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Why do we use it? It is a long established fact that a reader will be distracted by the readable content
                                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable
                                English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                                and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have
                                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."/>
                            </div>

                            <div>
                                <label className="col-form-label">Photo</label>
                            </div>
                            <div className="">
                                <input type="text" className="form-control " name="title" placeholder="photo url"/>
                            </div>
                        </form>

                        <div  > <NavLink exact={true} to="/Home"> <button className="btn btn-green w-50" >Publish </button> </NavLink></div>

                    </div>
                </section>

                <section className="nav-left">
                    <ProfileLogout />
                </section>


            </section>





        </section>


    )
}
export default AddNewPost