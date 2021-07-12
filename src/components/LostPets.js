import React from "react";
import Logo from "../images/Group 1.svg"
import { NavLink } from "react-router-dom";



const LostPets = () => {
    return (

        <section>
            <header>
                <a href=""><img src={Logo} alt="#"/></a>
            </header>

            <NavLink exact={true} to="/LostPets">Lost</NavLink>
            <NavLink exact={true} to="/FoundPets">Found</NavLink>

            <div><span>Found pets</span></div>

            <div>
                Would you like to publish a post? <NavLink exact={true} to="/signIn">Join</NavLink> the our community!
            </div>

            <div >
                <div>
                    <h3>Uncle Sam</h3>
                    <p>Oliver Platy, Berlin</p>
                    <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:f8d235c1-c662-44d2-bb34-52236e66221a;revision=0?component_id=e0ecb0c6-d071-4d1e-a885-c4e0623a0597&api_key=CometServer1&access_token=1626030948_urn%3Aaaid%3Asc%3AUS%3Af8d235c1-c662-44d2-bb34-52236e66221a%3Bpublic_6c1eade652931e7d778b2a8119e44f168142964a" alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>John Goodboy</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:f8d235c1-c662-44d2-bb34-52236e66221a;revision=0?component_id=b92758d6-39c2-4895-a436-8e06d3473a1a&api_key=CometServer1&access_token=1626030948_urn%3Aaaid%3Asc%3AUS%3Af8d235c1-c662-44d2-bb34-52236e66221a%3Bpublic_6c1eade652931e7d778b2a8119e44f168142964a" alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Janneta</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:f8d235c1-c662-44d2-bb34-52236e66221a;revision=0?component_id=758f7c69-b3bc-4bea-bfb2-0473487bd3f5&api_key=CometServer1&access_token=1626030948_urn%3Aaaid%3Asc%3AUS%3Af8d235c1-c662-44d2-bb34-52236e66221a%3Bpublic_6c1eade652931e7d778b2a8119e44f168142964a" alt="#"/>
                    <a href="">view details>></a>
                </div>

            </div>

            <div>
                <div>
                    <h3>Leonard</h3>
                    <p>Oliver Platy, Berlin</p>
                    <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:f8d235c1-c662-44d2-bb34-52236e66221a;revision=0?component_id=23986c78-2632-4847-9e2b-3e3720f50357&api_key=CometServer1&access_token=1626030948_urn%3Aaaid%3Asc%3AUS%3Af8d235c1-c662-44d2-bb34-52236e66221a%3Bpublic_6c1eade652931e7d778b2a8119e44f168142964a" alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Chick</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:f8d235c1-c662-44d2-bb34-52236e66221a;revision=0?component_id=7e069d1a-1dca-4f7b-9678-cd408c706e3e&api_key=CometServer1&access_token=1626030948_urn%3Aaaid%3Asc%3AUS%3Af8d235c1-c662-44d2-bb34-52236e66221a%3Bpublic_6c1eade652931e7d778b2a8119e44f168142964a" alt="#"/>
                    <a href="">view details>></a>
                </div>
                <div>
                    <h3>Basiliy</h3>
                    <p>Schloss Str, Potsdam</p>
                    <img src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:f8d235c1-c662-44d2-bb34-52236e66221a;revision=0?component_id=25e1e136-f116-413e-a252-e81c339ed602&api_key=CometServer1&access_token=1626030948_urn%3Aaaid%3Asc%3AUS%3Af8d235c1-c662-44d2-bb34-52236e66221a%3Bpublic_6c1eade652931e7d778b2a8119e44f168142964a" alt="#"/>
                    <a href="">view details>></a>
                </div>

            </div>
        </section>



    )

}

export default LostPets