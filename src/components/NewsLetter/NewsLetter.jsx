import React from 'react'
import './NewsLetter.css'
const NewsLetter=()=>{
    return(
        <div className="News">
            <div className="News-h">
                <h1>Get Exclusive Ofeers On Your Email</h1>
                <p>Subscribe to our newletter and stay updated</p>
            </div>
            <div className="News-d">
                <input type="email" placeholder='Your Email id'/>
                <button>Subscribe</button>
            </div>

        </div>
        
    )
}
export default NewsLetter