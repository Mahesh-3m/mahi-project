import React from 'react'
import './Footer.css'
import m from '../../assets/m.jpg'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
const Footer=()=>{
    return(
        <div className="Footer">
            <div className="Footer-Logo">
                <img src={m} alt="mystore"/>
                <p>MahiStore</p>
            </div>
            <ul className="Footer-ul">
                <li>Company</li>
                <li>Products</li>
                <li>Offers</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="F-logo">
                <div className="F-git">
                    <img src={github} alt="github" />
                </div>
                <div>
                    <img src={instagram} alt="instagram"/>
                </div>
                <div>
                    <img src={linkedin} alt="linkedin"/>
                </div>
                <div>
                    <img src={whatsapp} alt="whatsapp"/>
                </div>

            </div>
            <div className="Footer-d">
                <hr/>
                <p>Copyright @2026 - All Right Resorved</p>
            </div>
        </div>
    )
}
export default Footer