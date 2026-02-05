import React from 'react'
import './CSS/Contact.css'
const Contact = () => {
    return (
        <div className="cont">
            <h1>CONTACT</h1>
            <div className="contact">
                
                <div className="contact-h">
                    <div className="contact-t">
                        <h2>Contact Me:</h2>
                    </div>
                    <div className="contact-d">
                        <label for="fname">First Name:</label>
                        <input type="text" id="fname" class="name"></input>
                        <label for="fname">Last Name:</label>
                        <input type="text" id="lname" class="name"></input>
                        <label for="mobile">Mobile No:</label>
                        <input type="text" id="mobile" class="Mobile No"></input>
                        <label for="address">Address:</label>
                        <textarea id="address">ma</textarea>
                        <label for="gen">Gender:</label>
                        <label><input type="radio" id="gen" name="gender" />Male</label>
                        <label><input type="radio" id="gen" name="gender" />Female</label>
                        <button>Submit</button>
                    </div>
                </div>
                <div className="contact-my-h">
                    <div className="contact-my-t">
                        <h2>My Details:</h2>
                    </div>
                    <div class="contact-my-d">
                        <h3>Name:</h3>
                        <p>Mahesh</p>
                        <h3>Mobile No:</h3>
                        <p>9014******</p>
                        <h3>Email:</h3>
                        <p>mahi***@gmail.com</p>
                        <h3>Office:</h3>
                        <p>Borabada,hyd.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact