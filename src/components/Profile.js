import React from "react";
import HeaderWhite from "./HeaderWhite";
import {NavLink} from "react-router-dom";
import ProfileLogout from "./ProfileLogout";


const Profile = ()=> {
    return (

        <section>
            <section>
                <HeaderWhite />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section>
                    {/*<Navigation/>*/}
                </section>

                <section className="container">
                    <div>
                        <div className="header-text">Your profile. Change, edit and manage your data.</div>
                        <div className="profile">My profile</div>

                        <div className="">
                            <img src="" alt=""/>
                            <p>Anna Smith</p>
                        </div>
                    </div>

                    <div className="container">
                        <form className=" row">

                            <div className="d-flex row">
                                <label className=" col-form-label label">Email</label>

                                <div className="">
                                    <input type="text" className="form-control input" name="eMail" placeholder="helenjohnson@gmail.com"/>
                                </div>

                            </div>

                            <div className="d-flex row">
                                <label className=" col-form-label label">Phone</label>
                                <div className="">
                                    <input type="text" className="form-control input" name="phone" placeholder="00-000-00"/>
                                </div>

                            </div >

                            <div className="row ">
                                <label className=" col-form-label label">Avatar</label>
                                <div className="">
                                    <input type="" className="form-control input" name="avatar" placeholder="anna_portret.jpg"/>
                                </div>

                            </div>
                            <div className="row ">
                                <label className=" col-form-label label">My pet</label>
                                <div className="">
                                    <input type="text" className="form-control input" name="myPet" placeholder="Dog"/>
                                </div>

                            </div>
                            <div className="row">
                                <label className=" col-form-label label">Nick</label>
                                <div className="">
                                    <input type="text" className="form-control input" name="nick" placeholder="Uncle Sam"/>
                                </div>

                            </div>
                            <div className="d-flex col-12 ">
                                <div>
                                    <label className=" col-form-label label">Photo</label>
                                </div>
                                <div className="">
                                    <input type="text" className="form-control input" name="photo" placeholder="my dog.jpg"/>
                                </div>

                            </div>
                        </form>

                    </div>



                    <div className="d-flex col-6">
                        <div>
                            <NavLink exact={true} to="/"><div className="addnewpost">Cancel</div></NavLink>
                        </div>
                        <div>
                            <NavLink exact={true} to="Home"><div className="addnewpost">Save changes</div></NavLink>
                        </div>

                    </div>





                </section>

                <section>
                    <ProfileLogout />
                </section>

            </section>
        </section>



    )
}

export default Profile