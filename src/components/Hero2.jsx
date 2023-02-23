import React from "react";
import contact from "./images/Contact.png"

export default function Hero2() {
    return(
        <div className="hero-two-cont">
            <div className="htc">
                <div className="hero-two-img">
                    <div className="al"><img src={contact} alt="contact us" width='90%'/></div>
                </div>
                <div className="hero-two-text">
                    <h1>We’re always <br /> available to respond <br /> to your inquires </h1>
                    <p>Our team of customer support experts are ready and always available to assist you with whatever inquiry you have.  We’re available 24/7 to offer you assistance and answer all your questions.</p>
                </div>
            </div>
        </div>
    )
}