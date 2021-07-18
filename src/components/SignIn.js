import React from "react";
import Logo from "../images/Group1.svg";

const SignIn = () => {
    return (
        <section className="body">
            <section className="signing">
                <img src={Logo} alt="#"/>
                <p><span>Welcome!</span> Please sign in / sign up to continue or</p>

                <div>Sign up</div>
                <div>Sign in</div>
                <div>Password must have at least 8 characters with at least one Capital letter, at least one lower case letter and at least one number or special character.</div>
                <div>Please re-enter your password</div>

                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" name="fName"/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" name="email"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="password"/>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" name="password"/>
                    </div>
                </form>
                <div>
                    <p>By clicking “Submit”, you agree to us processing your information in accordance with these terms.</p>
                    <button type="submit" className="btn btn-primary w-40">Cancel</button>
                    <button type="submit" className="btn btn-primary w-40">Submit</button>
                </div>


            </section>

        </section>

    )
}

export default SignIn