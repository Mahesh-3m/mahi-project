import React from 'react'
import Navbar from '../components/navbar/navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Store from './Store'
import StoreCategory from './StoreCategory'
import Product from './Product'
import Cart from './Cart'
import LoginSignup from './LoginSignup'
import Footer from'../components/Footer/Footer'
import men_banner from '../assets/men_banner.jpeg'
import women_banner from '../assets/women_banner.jpeg'
import kid_banner from '../assets/kid_banner.jpeg'
const Mainpage=()=>{
    return(
        <div>
            <BrowserRouter>
            
            <Navbar/>
            <Routes>
                <Route path='/' element={<Store/>} />
                <Route path='/mens' element={<StoreCategory banner={men_banner} category="men"/>} />
                <Route path='/womens' element={<StoreCategory banner={women_banner} category="women"/>} />
                <Route path='/kids' element={<StoreCategory banner={kid_banner} category="kid"/>} />
                <Route path='/product' element={<Product/>}>
                   <Route path=':productId' element={<Product/>}/> 
                </Route>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/login' element={<LoginSignup/>}/>
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
    )
}
export default Mainpage