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
import HomeFoundCat from "../components/HomeFoundCat";
import HomeFound from "../components/HomeFound";
import HomeLost from "../components/HomeLost";
import HomeLostDog from "../components/HomeLostDog";
import AddNewFound from "../components/AddNewFound";
import AddNewLost from "../components/AddNewFound";
import Walking from "../components/services/Walking";
import WalkingPost from "../components/services/WalkingPost";
import Fostering from "../components/services/Fostering";
import FosteringPost from "../components/services/FosteringPost";
import VetHelp from "../components/services/VetHelp";
import VetHelpPost from "../components/services/VetHelpPost";




const Pages = () => {
    return (
        // <Router>
        <Switch>
            <Route exact={true} path="/" component={Start} />


            <Route exact={true} path="/signIn"><SignIn /></Route>

            <Route exact={true} path="/Home" component={Home}/>
            <Route exact={true} path="/HomeLost" component={HomeLost}/>
            <Route exact={true} path="/HomeFound" component={HomeFound}/>
            <Route exact={true} path="/HomeFoundCat" component={HomeFoundCat}/>

            <Route exact={true} path="/HomeLostDog" component={HomeLostDog}/>


            <Route exact={true} path="/Profile" component={Profile}/>
            <Route exact={true} path="/MainPost" component={MainPost}/>
            <Route exact={true} path="/AddNewPost" component={AddNewPost} />

            <Route exact={true} path="/LostPets" component={LostPets} />
            <Route exact={true} path="/FoundPets" component={FoundPets}/>
            <Route exact={true} path="/FoundCat" component={FoundCat}/>
            <Route exact={true} path="/LostDog" component={LostDog}/>


            <Route exact={true} path="/AddNewFound" component={AddNewFound} />
            <Route exact={true} path="/AddNewLost" component={AddNewLost} />

            <Route exact={true} path="/Walking" component={Walking} />
            <Route exact={true} path="/WalkingPost" component={WalkingPost} />
            <Route exact={true} path="/Fostering" component={Fostering} />
            <Route exact={true} path="/FosteringPost" component={FosteringPost} />
            <Route exact={true} path="/VetHelp" component={VetHelp} />
            <Route exact={true} path="/VetHelpPost" component={VetHelpPost} />






        </Switch>
        // </Router>

    )
}

export default Pages