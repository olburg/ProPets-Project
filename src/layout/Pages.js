import React from "react"
import {Switch, Route} from "react-router-dom";
import FoundPets from "../components/FoundPets";
import Home from "../components/Home";


const Pages = () => {
    return (
        <Switch>
            <Route exact={true} path="/"><Home /> <Route/>
            {/*<Route exact={true} path="lostPets" component={LostPets} />*/}
            <Route path="/FoundPets" /><FoundPets /></Route>
        </Switch>
    )
}

export default Pages