import React from 'react'
import './CSS/Home.css'
import mahesh from '../assets/mahesh.jpeg'

/*import  about from '../componets/about'
import  resume from '../componets/resume'
import skill from '../componets/skill'
import contact from '../componets/contact'*/

const Home = () => {
    return (
        <div className="home-page">
            <div className="Home">
                <h2>Welcome To Portpolio</h2>
                <h1>MAHESH M</h1>
                <h2>I am try to job</h2>
                <img src={mahesh} alt="my pic" />
            </div>
            <div>
            
            {/*<About/>
            <Skill/>
            <Resume/>
            <Contact/>*/}
            
            </div>
        </div>
    )
}
export default Home