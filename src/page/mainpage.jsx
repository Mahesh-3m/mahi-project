import React, {useState} from 'react'
import Header from '../componets/header'
import Home from '../componets/home'
import About from '../componets/about'
import Contact from '../componets/contact'
import Footer from '../componets/footer'
import Skill from '../componets/skill'
import Resume from '../componets/resume'
import {skills} from '../componets/data'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Portpolio from '../componets/Portpolio'
//import Mahi from '../componets/header.js'
const Mainpage= () =>{
const [myskill, setmyskill]= useState(skills)
console.log(skills)
    return(
        <div>
            <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/Portpolio' element={<Portpolio/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/resume' element={<Resume/>} />
                <Route path='/skill' element={<Skill myskill={myskill}/>} />
                <Route path='/Contact' element={<Contact/>} />

            </Routes>
            <Footer/>
            
            {/*<Home/>
            <About/>
            <Skill myskill={myskill}/>
            <Resume/>
            <Contact/>
            <Footer/>*/}
            </BrowserRouter>
        </div>
    )
}
export default Mainpage