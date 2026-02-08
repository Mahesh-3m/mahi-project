import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offerce from '../components/Offerce/Offerce'
import New_collection from '../components/New_collection/New-collection'
import NewsLetter from '../components/NewsLetter/NewsLetter'
//import Footer from '../components/Footer/Footer'
const Store=()=>{
    return(
        <div>
            <Hero/>
            <Popular/>
            <Offerce/>
            <New_collection/>
            <NewsLetter/>
            {/*<Footer/>*/}
        </div>
    )
}
export default Store