import React from "react"
import {Switch, Route, Router} from "react-router-dom";
import FoundPets from "../components/FoundPets";
import Main from "../components/Main";
import SignIn from "../components/SignIn";
import LostPets from "../components/LostPets";
import FoundCat from "../components/FoundCat";
import LostDog from "../components/LostDog";


const Pages = () => {
    return (
        // <Router>
        <Switch>
            <Route exact={true} path="/"><Main /></Route>

            <Route exact={true} path="/signIn"><SignIn /></Route>
            <Route exact={true} path="/LostPets" component={LostPets} />
            <Route exact={true} path="/FoundPets" component={FoundPets}/>
            <Route exact={true} path="/FoundCat" component={FoundCat}/>
            <Route exact={true} path="/LostDog" component={LostDog}/>


        </Switch>
        // </Router>

    )
}

export default Pages