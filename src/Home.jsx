import "./Navbar.css"
import logo from "./images/Group 23.png"
import {Link} from 'react-router-dom'

export default function Home() {
    return(
        <div>
            <div className="nav">
                <div className="logo">
                    <img src={logo} alt="logo" width='100%' />
                </div>
                <div className="options">
                    <ul className="opt">
                        <li>Home</li>
                        <li>About Us</li>
                        <Link to="/contact" style={{textDecoration:'none'}}>
                            <li style={{paddingTop:8, color:"black"}}>Contact Us</li>
                        </Link>
                        <li>Live Chat</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}