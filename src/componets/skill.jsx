import React from 'react'
import './CSS/Skill.css'
const Skill=(props) =>{
    const{title,image1, image2, image3, image4, image5}= props.myskill
    return(
        <div className="img-h">
            <h2>{title}</h2>
            <div className="image">
                <img src={image1} alt="css"/>
                <img src={image2} alt="css"/>
                <img src={image3} alt="css"/>
                <img src={image4} alt="css"/>
                <img src={image5} alt="css"/>
            </div>    
        </div>
    )
}
export default Skill
