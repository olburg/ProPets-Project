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
                <section>
                    <Navigation/>
                </section>

                <section>
                    <div>
                        Found a pet? Please complete the form to help.
                        <hr />
                    </div>



                </section>

                <section>
                    <section>
                        <ProfileLogout/>
                    </section>
                </section>

            </section>






        </section>





    )
}
export default AddNewLost