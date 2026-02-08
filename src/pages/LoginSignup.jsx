import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup=()=>{
    return(
        <div className="sign">
            <div className="sign-h">
                <h1>Sign Up</h1>
                <div className="sign-d">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email Address"/>
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p>Alredy have an account?<span>Login Here</span></p>
                <div className="signup">
                    <input type="checkbox" name=" " id=" "/>
                    <p>By continung, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
            

        </div>
    )
}
export default LoginSignup