import React from 'react'
import Home from '../componets/home'
import About from '../componets/about'
import Resume from '../componets/resume'
import Skill from '../componets/skill'
import Contact from '../componets/contact'
import {skills} from '../componets/data'
const Portpolio=()=>{
    const myskill = [
        { name: "HTML", level: "Advanced", image: skills.image2 },
        { name: "CSS", level: "Advanced", image: skills.image1 },
        { name: "JavaScript", level: "Intermediate", image: skills.image3 },
        { name: "Python", level: "Intermediate", image: skills.image4 },
        { name: "React", level: "Intermediate", image: skills.image5 }
    ];
    return(
        <div>
            <Home/>
            <About/>
            <Resume/>
            <Skill myskill={myskill}/>
            <Contact/>

        </div>
    )
}
export default Portpolio