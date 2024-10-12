import { useState } from "react"
import { assets } from "../../assets/assets"
import axios from "axios"

import './LoginPop.css'
const LoginPopup = ({ setShowLogin }) => {
    const [currentState, setCurrentState] = useState("Sign In")
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/login ", formData);
            console.log(response.data);
        } catch (error) {
            console.log('there was an error', error);
        }
    }




    return (
        <>

                <form className="form" onSubmit={handleSubmit}>
                    <div>
                        <span className="form-title"> <p>{currentState}  </p>
                            <img onClick={() => { setShowLogin(false) }} className="close-icon" src={assets.close_icon} alt="" /></span>

                    </div>
                    {currentState == "Sign In" ? <div className="form-username">

                        <span><img src={assets.username} alt="" />
                            <input type="text" name="username" placeholder="Enter Your User Name" onChange={handleChange} />
                        </span>
                    </div> : <></>}
                    <div className="form-email">
                        <span><img src={assets.email} alt="" />
                            <input type="email" name="email" required placeholder="Enter Your Email Here" onChange={handleChange}/>
                        </span>
                    </div>
                    <div className="form-password">
                        <span><img src={assets.password} alt="" />
                            <input type="password" name="password" required placeholder="Enter Your Password Here" onChange={handleChange}/>
                        </span>
                    </div>

                    <div className="login-condition">
                        <button type="submit" className="login-condition-btn">{currentState}</button>
                        {currentState == "Sign In" ? <> <p>already have an account?</p><span onClick={() => setCurrentState("Log In")}>Click here to log in</span></> : <> <p>Dont' have an account?</p><span onClick={() => setCurrentState("Sign In")}>Click here to sign in</span></>}
                    </div>

                </form>

        </>
    )
}

export default LoginPopup
