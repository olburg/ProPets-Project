
import React from "react";
import { NavLink } from "react-router-dom";


const MainNav = () => {
    return (
        <section>
            <section>
                <NavLink exact={true} to="/Home">Home</NavLink>
        <br/>
            <NavLink exact={true} to="/LostDog">Lost</NavLink>
        <br/> 
                <NavLink exact={true} to="/Home/MainFound">Found</NavLink>
        <br />
                {/* <ServiceNav/> */}
       
        </section>
            
         </section>
     )
}
export default MainNav