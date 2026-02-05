
import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './CSS/Header.css'
const Header= ()=>{
    const [menu,setMenu]= useState("Portpolio");
    return(
        <div>
            <nav className="header">
                <header className="nav-bar">
                    <ul>
                        <li onClick={()=>{setMenu("Portpolio")}}><Link to='/Portpolio'>PORTPOLIO</Link>{menu==="Portpolio"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("home")}}><Link to='/'>HOME</Link>{menu==="home"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("about")}}><Link to='/about'>ABOUT</Link>{menu==="about"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("resume")}}><Link to='/resume'>RESUME</Link>{menu==="resume"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("skill")}}><Link to='/skill'>SKILL</Link>{menu==="skill"?<hr/>:<></>}</li>
                        <li onClick={()=>{setMenu("contact")}}><Link to='/contact'>CONTACT</Link>{menu==="contact"?<hr/>:<></>}</li>
                    </ul>
                </header>
            </nav>
          
        </div>
    )
}
export default Header