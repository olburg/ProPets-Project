
import React, { useState, useContext } from "react";

import HeaderWhite from "./HeaderWhite"
import ProfileLogout from "./ProfileLogout";

import { connect } from "react-redux";
import { addPost } from "../store/actions/posts_actions";
import Navigation from "./Navigation";
import {NavLink} from "react-router-dom";
import {faPaw} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Puppy from "../images/Puppy.png"


const  AddPost = ({ activePerson, addLocalPost, setAddPostMode }) => {
    const [formData, setFormData] = useState({
        personId: activePerson,
        title: "",
        body: "",
        photo: "",
    });

    const changeFieldHandle = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (

        <section>
            <section>
                <HeaderWhite />
            </section>

            <section className="d-flex row row-cols-lg-3 row-cols-md-3" >

                <section className="nav-right">
                    <Navigation />
                </section>

                <section className="w-auto">







                    <div className="post-wrapper">
                        <div className="header-text">Your new post! Simply text, add photo and publish.</div>
                    </div>

                    <div className="container">
                        <form onSubmit={() => {
                            addLocalPost(formData)
                        }} className="d-flex row">
                            <div>
                                <label className=" col-form-label">Title</label>
                            </div>
                            <div className="">
                                <input type="text"
                                       className="form-control "
                                       name="title"
                                       placeholder="The quick, brown fox jumps"
                                       style={ { color: "#bababa" } }
                                       onChange={changeFieldHandle} />
                            </div>

                            <div>
                                <label className=" col-form-label">Text <br/> up to 1500 char</label>
                            </div>
                            <div className="">
                                <textarea type="text"
                                       className="form-control input-comment"
                                       name="body"
                                       value="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                                evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." style={ { color: "#bababa" } }
                                       onChange={changeFieldHandle}/>

                            </div>

                            <div>
                                <label className="col-form-label">Photo</label>
                            </div>
                            <div className="">
                                <input type="text"
                                       className="form-control"
                                       name="photo"
                                       placeholder="photo url"
                                       style={ { color: "#bababa" } }
                                       onChange={changeFieldHandle}
                                />
                            </div>

                        </form>


                        <div className="d-flex flex-row justify-content-between mt-3">
                            <div className="d-flex flex-row">
                                <img src={Puppy} alt="" className="photo-avatar"/>
                                <div className="header-text" style={ {margin: "0", marginLeft: "10px"} }>John Goodboy</div>
                            </div>

                            <NavLink exact={true} to="/Home"><div className="addnewpost"><FontAwesomeIcon icon={faPaw} />  Publish</div></NavLink>

                            {/*<div  > <NavLink exact={true} to="/Home"> <button className="btn btn-green w-50" >Publish </button> </NavLink></div>*/}

                        </div>





                    </div>
                </section>



            </section>

            <section className="nav-left">
                <ProfileLogout />
            </section>


        </section>


    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLocalPost: (post) => dispatch(addPost(post)),
    };
};

export default connect(null, mapDispatchToProps)(AddPost)