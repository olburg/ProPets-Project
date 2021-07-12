import React from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import Logo from "../images/Group 1.svg"
import Dog from "../images/Image2.jpg"
import FoundPets from "./FoundPets";
import SignIn from "./SignIn";
import LostPets from "./LostPets";


const Home = () => {
   
    return (
        <section>
            <nav>
                <header className="header">
                <img src={Logo} alt="#"></img>
                   
                    <NavLink exact={true} to="/signIn">SignIn</NavLink>
                </header>
            </nav>


            <section>
                <h1 className=""> Welcome to your pawfessional community</h1>

                <NavLink exact={true} to="/LostPets" activeStyle={{color: ""}}>I lost my pet!</NavLink>
                <br />



                <NavLink exact={true} to="/FoundPets" activeStyle={{color: ""}}>I found a pet!</NavLink>
                <div>
                    I’m okay, just want to <NavLink exact={true} to="/signIn">Join</NavLink> the pawsome community!
                </div>

                <div><img src={Dog}></img></div>
            </section>

            <section>
                <h2>Our fluffy space for lovers, admirers, dads and moms of our four-legged, winged, tailed guys.</h2>
            </section>


            <section>
                <div>
                <h3>
                    Here is collected everything that your pet needs:
                </h3>
                <div>
                    <ul>
                        <li>professional veterinarian tips;</li>
                        <li>useful information about education and care;</li>
                        <li>information about pet-sitting and walking service;</li>
                        <li>and of course, great communication with new friends in your social network!</li>
                    </ul>

                    <div>
                        Make an account and <NavLink exact={true} to="/signIn">Join</NavLink> to us!
                    </div>

                </div>
            </div>
            </section>
            <section className="footer">
                <div><img src="" alt="#"  /></div>
                <div>1600 Amphitheatre Pkwy Mountain View, CA 94043, USA</div>
            </section>


            <section>
                <Switch>
                    <Route exact={true} path="/signIn"><SignIn /></Route>
                    <Route exact={true} path="/LostPets" component={LostPets} />
                    <Route exact={true} path="/FoundPets" component={FoundPets}/>
                </Switch>
            </section>
        </section>
    )
}

export default Home
