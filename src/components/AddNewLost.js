import React from "react";
import HeaderWhite from "./HeaderWhite";
import Navigation from "./Navigation";
import ProfileLogout from "./ProfileLogout";



const AddNewLost = () => {
    return (
        <section>

            <section>
                <HeaderWhite />
            </section>

            <section className="d-flex row-cols-lg-3 row-cols-md-3">
                <section className="nav-right">
                    <Navigation/>
                </section>

                <section>
                    <div>
                        Lost your buddy? Keep calm and complete the form.
                        <hr />
                    </div>



                </section>

                <section>
                    <section className="nav-left">
                        <ProfileLogout/>
                    </section>
                </section>

            </section>






        </section>





    )
}
export default AddNewLost