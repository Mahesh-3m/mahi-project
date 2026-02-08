import React, {useState,useContext} from 'react'
import cart_logo from '../../assets/cart_logo.png';
import {Link} from 'react-router-dom'
import './navbar.css'
import {StoreContext} from '../../context/StoreContext'


const Navbar=()=>{
    const [menu,setMenu]= useState("store");
    const {getTotalCartItems}=useContext(StoreContext)
    return(
        <div>
            <div className="nav">
                <h1>Mahi Store</h1>
                <ul>
                    <li onClick={()=>{setMenu("store")}}><Link to='/'>Store</Link></li>
                    <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Men</Link></li>
                    <li onClick={()=>{setMenu("womens")}}><Link to='/womens'>Women</Link></li>
                    <li onClick={()=>{setMenu("kids")}}><Link to='/kids'>Kids</Link></li>
                </ul>
                <div className="nav-log">
                    <Link to='/login'><button>Login</button></Link>
                    <Link to='/cart'> <img src={cart_logo} alt="cart"/></Link>
                    <div className="nav_cart">
                        {getTotalCartItems()}
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Navbar