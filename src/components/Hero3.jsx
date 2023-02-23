import React from "react";
import hmo from "./images/Group 27141.png"

export default function Hero3() {
    return(
        <div className="hero-three">
            <h1>Trusted HMO’s we work with</h1>
            <img src={hmo} alt="hmo" width='70%' />
            <div className='exp'>
              <p><span>Hear from our clients</span></p>
            </div>
        </div>
    )
}