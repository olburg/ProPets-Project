import React, { useState, useContext } from "react";
import LogoGreen from "../images/LogoGreen.svg";
import {Link, NavLink} from "react-router-dom";
import Home from "./Home";
import { connect } from "react-redux";
import { addNewPerson } from "../store/actions/persons_actions";


const  SignIn = ({  addPerson }) => {
    const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      password: "",
    });
  
    const changeFieldHandle = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
    return (
        <section className="container body_signin">
            <section className="signing">
                <img src={LogoGreen} alt="#"/>
                <p><span>Welcome!</span> Please sign in / sign up to continue or</p>



                <div className="d-flex flex-row ">
                    <div className="signUp w-50">
                        <div>Sign up</div>
                        <form method="POST" onSubmit={(e) => {
                            e.preventDefault()
                            addPerson(formData)
                        }}>
                            <div className="row">
                                <label>FullName</label>
                                <input type="text" className="form-control" name="fullName"  onChange={changeFieldHandle}/>
                            </div>

                            <div className="form-group">
                                <label className="col-sm-2 col-form-label">Email</label>
                                <input type="text" className="form-control" name="email"  onChange={changeFieldHandle}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control" name="password"  onChange={changeFieldHandle}/>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="text" className="form-control" name="password"  onChange={changeFieldHandle}/>
                            </div>
                            <button type="submit" className="btn">
                          Submit
                          </button>
                        </form>
                    </div>

                    <div className="signIn w-50">
                        <div>Sign in</div>
                        <div>Password must have at least 8 characters with at least one Capital letter, at least one lower case letter and at least one number or special character.</div>
                        <div>Please re-enter your password</div>
                    </div>


                </div>

                <div className="d-flex flex-row">
                    <p style={{color: "gray"}}>By clicking “Submit”, you agree to us processing your information in accordance with these terms.</p>

                    <button type="submit" className="btn w-40">
                        <NavLink exact={true} to="/">Cancel</NavLink>
                    </button>

                    {/* <button type="submit" className="btn">
                        <NavLink exact={true} to="/Home">Submit</NavLink>
                    </button> */}
                </div>


            </section>

        </section>

    )


}

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: (person) => dispatch(addNewPerson(person)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(SignIn)