import React from 'react'
import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'
import './CSS/Footer.css'
const Footer=() =>{
    return(
        <div className="footer">
            <div className="footer-t">
            <h3>Thanks for visit my page.</h3>
            </div>
            <div className="footer-d">
                <a href="#git"><img src={github} alt="Github"/></a>
                <a href="#insta"><img src={instagram} alt="Instagram"/></a>
                <a href="#link"><img src={linkedin} alt="Linkedin"/></a>
                <a href="#whats"><img src={whatsapp} alt="Whatsapp"/></a>
            </div>
        </div>    
    )
}
export default Footer