import React from "react";
import world from "./images/World.png"

export default function Hero1() {
    return(
        <div className="hero-one">
            <div className="hero-one-cont">
                <div className="hero-one-text">
                    <p>To talk about World Health Day, we need to talk about the creation of the World Health Organization as a whole. In December 1945, officials of Brazil and China proposed the creation of an international health organization, that is all-encompassing and absolutely independent from any government powers.</p> <br />
                    <p>Half a year later, in New York, in July 1946, the constitution of the World Health Organization was approved. Said constitution entered into force on April 7, 1948, as 61 countries signed in agreement for the inception of the NGO.</p>
                </div>
                <div className="hero-one-pic">
                    <img src={world} alt="world health day" width='100%' />
                </div>
            </div>
        </div>
    )
}