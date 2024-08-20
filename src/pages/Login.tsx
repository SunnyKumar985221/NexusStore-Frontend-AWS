import React from 'react'
import '../assets/css/Login.scss';

const Login: React.FC = () => {
    return (
        <>
            <div className="main__container">
                <div className="text__container">
                    <span>NexusStore</span>
                    <p>Empower your global business with NexusStore – Your gateway to effortless buying and selling worldwide!</p>
                </div>
                <div className="login__container">
                    <input className="inputlogin" name="email" placeholder="Email address or phone number" type="email" />
                    <input className="inputpassword" name="password" placeholder="Password" type="password" />
                    <div><button className="loginbutton">Log In</button></div>
                    <div className="forgetpassword">Forgotten password?</div>
                    <button className="register"><a href="/sign-up">Create New Account</a></button>

                </div>
            </div>
        </>
    )
}

export default Login
