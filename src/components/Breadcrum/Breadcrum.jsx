import React from 'react'
import arrow from '../../assets/arrow.png'
import './Breadcrum.css'
const Breadcrum =(props)=>{
    const {product}=props;
    return(
        <div className="Breadcrum">
            HOME <img src={arrow} alt="arrow"/>
            STORE <img src={arrow} alt="arrow"/>
            {product.category} <img src={arrow} alt="arrow"/> {product.name}

        </div>
    )
}
export default Breadcrum