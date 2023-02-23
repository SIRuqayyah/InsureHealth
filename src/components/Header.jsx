import React from "react"
import pic from "./images/rafiki.png"

export default function Header() {
    return(
        <div className="header-cont">
            <div className="header-text">
                <h1>Your Health Matters to <br /> us as much as your <br /> money does to you</h1>
                <p>At <span className="bmn">InsurHealth</span> we are focused on ensuring that our clients get <br /> the best out of their HMO plans based on their finances by being the mediator between client and Health Providers to guarantee a smooth access to Healthcare at all times. </p> <br />
                <p>Availability of accessible Healthcare is an important tool in structuring any nation and we help in ensuring that  structure is well maintained by providing services that aid this <br /> availability.</p>
                <button className="header-btn">About us</button>

            </div>
            <div className="header-img">
                <img src={pic} alt="image of a doctor" width='500px' />
            </div>
        </div>
    )
}