import React from "react"
import {Switch, Route, Router} from "react-router-dom";
import FoundPets from "../components/FoundPets";

import SignIn from "../components/SignIn";
import LostPets from "../components/LostPets";
import FoundCat from "../components/FoundCat";
import LostDog from "../components/LostDog";
import Start from "../components/Start";
import Home from "../components/Home";
import AddNewPost from "../components/AddNewPost"
import Profile from "../components/Profile";
import MainPost from "../components/MainPost";



const Pages = () => {
    return (
        // <Router>
        <Switch>
            <Route exact={true} path="/" component={Start} />

            <Route exact={true} path="/signIn"><SignIn /></Route>
            <Route exact={true} path="/Home" component={Home}/>

            <Route exact={true} path="/Profile" component={Profile}/>
            <Route exact={true} path="/MainPost" component={MainPost}/>

            <Route exact={true} path="/LostPets" component={LostPets} />
            <Route exact={true} path="/FoundPets" component={FoundPets}/>
            <Route exact={true} path="/FoundCat" component={FoundCat}/>
            <Route exact={true} path="/LostDog" component={LostDog}/>

            <Route exact={true} path="/AddNewPost" component={AddNewPost} />


        </Switch>
        // </Router>

    )
}

export default Pages