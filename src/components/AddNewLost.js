import React from "react";
import HeaderWhite from "./HeaderWhite";
import Navigation from "./Navigation";
import ProfileLogout from "./ProfileLogout";
import HeaderWhiteNew from "./HeaderWhiteNew";



const AddNewLost = () => {
    return (
        <section className="container-fluid" style={ {width: "1366px"}  }>

            <section>
                <HeaderWhiteNew />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">

                <section className="d-flex flex-row col-3">
                    <div className="nav-right">
                        <Navigation />
                    </div>
                </section>


                <section className="col-lg-6">
                    <div>Lost your buddy? Keep calm and complete the form.</div>
                    <hr />
                </section>

        </section>

        <section className="nav-left">
                <ProfileLogout/>
        </section>

    </section>
    )
}

export default AddNewLost

