import React from 'react'
import './Hero.css'
import mahesh from '../../assets/mahesh.jpeg'
const Hero=()=>{
    return(
        <div className="Hero">
            <div className="Hero-h">
                <h1>Welcome to MahiStore</h1>
                <p>New Collection For Everyone</p>
                <button>Shoping Now</button>

            </div>
            
            <div className="Hero-d">
                <img src={mahesh} alt="my pic"/>
            </div>
        </div>
    )
}
export default Hero
