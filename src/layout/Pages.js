import React from "react"
import {Switch, Route, Router} from "react-router-dom";
import FoundPets from "../components/FoundPets";
import Home from "../components/Home";
import SignIn from "../components/SignIn";
import LostPets from "../components/LostPets";


const Pages = () => {
    return (
        // <Router>
        <Switch>
            <Route exact={true} path="/"><Home /></Route>

            <Route exact={true} path="/signIn"><SignIn /></Route>
            <Route exact={true} path="/LostPets" component={LostPets} />
            <Route exact={true} path="/FoundPets" component={FoundPets}/>
        </Switch>
        // </Router>

    )
}

export default Pages