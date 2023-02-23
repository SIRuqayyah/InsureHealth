import React, {useState} from "react";
import logo from "./images/Group 23.png"
import doc from "./images/Group 1.png"
import LiveChat from "./LiveChat";

export default function Contact() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function handleLogin(event) {
        event.preventDefault();
        // handle login logic here
        window.location.href = "/";
      }

    return(
        
        <div className="contact-cont">
            <div className="con-logo">
                <img src={logo} alt="logo" width='13%' />
            </div>


            <div className="contact-us-cont">
                <div className="contact-us-text">
                    <form>
                        <input
                        id="username-input"
                        type="name"
                        className="con-input"
                        placeholder="Enter your name"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                        <input
                        id="email-input"
                        type="email"
                        className="con-input"
                        placeholder="Enter valid email address"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                        <textarea
                        id="message-input"
                        type="message"
                        className="cont-input"
                        placeholder="Enter your message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    </form>
                    <button onClick={handleLogin} type="submit" className="contact-btn">
                        Submit
                    </button>
                </div>
                <div className="contact-us-img">
                    <div className="plus"><img src={doc} alt="doc" width='100%' /></div>
                </div>
            </div>

            <div className="getin-cont">
            
                <div className="getin-text">
                    <div className="get-in-touch">
                        <h3>GET IN TOUCH</h3>
                        <p>Hello, we look forward to hearing from you</p>
                    </div>
                    <div className="get-touch">
                        <div className="get-touch-img">
                            <img src={logo} alt="logo" width='100%' />
                        </div>
                        <div className="get-touch-text">
                            <div className="touch-text">
                                <p>At InsurHealth we are focused on ensuring that our clients get the best out of their HMO plans based on there financial capabilities by being the mediator between client and Health Providers to guarantee a smooth access to Healthcare at all times.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-frame">
                    <h2>CALL US</h2>
                    <p>+23470747074</p>
                    <h2>SEND US AN EMAIL</h2>
                    <p>hello@insurehealth.com</p>
                    <h2>LOCATION</h2>
                    <p>Lagos street, Lagos Nigeria</p>
                </div>

                <div className="live">
                    <LiveChat />
                </div>
            </div>
        </div>
    )
}