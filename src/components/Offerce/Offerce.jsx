import React from 'react'
import './Offerce.css'
import NTR from '../../assets/NTR.jpg'
const Offerce=()=>{
    return(
        <div className="Offerce">
            <div className="Offerce-h">
                <h1>Offerce Shart</h1>
            </div>
            <div className="Offerce-d">
                <img src={NTR} alt="ntr" />
            </div>

        </div>
    )
}
export default Offerce