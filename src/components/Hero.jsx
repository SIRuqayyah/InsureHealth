import React from "react"
import pic1 from "./images/Group 353.png"
import pic2 from "./images/Group 354.png"
import pic3 from "./images/Group 355.png"
import pic4 from "./images/Group 357.png"

export default function Hero() {
    return(
        <div className="hero-cont">
            <div className="hero-text">
                <div className="hero">
                    <h1>With Us Your  Health Is <br />Insured</h1>
                    <p>InsurHealth is your one stop for all things Healthcare,We are concerned with providing Health assistance for all, regardless of their budget or income. We currently provide HMO’s assistance to Low and high income earners and individuals across Nigeria.</p>
                    <br />
                    <p>
                    We are partnered with 90% HMO providers and hospitals across Nigeria to provide individuals with reliable and usable Healthcare that caters to their needs all times
                    </p>
                </div>
            </div>
            <div className="hero-img">
                <div className="hero-img-cont">
                    <div className="try">
                        <div className='cone-img'>
                            <img src={pic1} alt="image of a doctor" width='90%' />
                            <p>When it comes to keeping track of  medical records and history of our clients, We ensure that all customers records are kept safe and are made available to them whenever they need it.</p>
                        </div>
                        <div className='cone-img'>
                            <img src={pic2} alt="image of a doctor" width='90%' />
                            <p>We work with the best HMO providers in Nigeria and we take pride in providing the best service to all our clients, we do nottake chances with the health of any of our clients. </p>
                        </div>
                    </div>
                    <div className="trys">
                        <div className='cone-img'>
                            <p>Since we are a company that’s bent on providing solutions to accessible healthcare we ensure feedback is generated from our clients whenever they use any HMO we offer.</p>
                            <img src={pic3} alt="image of a doctor" width='90%' />
                        </div>
                        <div className='cone-img'>
                            <p>Our goal is to make basic healthcare accessible for all and we do this by ensuring there’s a plan for every type of salary earner. We make it affordable by creating flexible payment plans.</p>
                            <img src={pic4} alt="image of a doctor" width='90%' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}