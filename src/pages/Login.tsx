import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/Login.scss';
import { signIn } from 'aws-amplify/auth';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useNavigate } from 'react-router-dom';
import { successAlert, errorAlert } from '../utilities/alert';
console.log("this is login page")
const Login: React.FC = () => {
    const navigate = useNavigate();
    const { isToken } = useSelector((state: RootState) => state.authentication);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const [username, setUsername] = useState('sunnyrajpcs842@gmail.com');
    const [password, setPassword] = useState('Sunny@120');

    const signin = async () => {
        try {
            const user = await signIn({ username, password });
            successAlert('Signed In Succesfully');
            navigate("/");
        } catch (error:any) {
            errorAlert(error.message)
        }
    };

    useEffect(() => {
        if (isToken) navigate("/");
        emailInputRef.current?.focus();
    }, []);

    return (
        <div className="main__container">
            <div className="text__container">
                <span>NexusStore</span>
                <p>Empower your global business with NexusStore – Your gateway to effortless buying and selling worldwide!</p>
            </div>
            <div className="login__container">
                <input
                    className="inputlogin"
                    name="email"
                    placeholder="Email address or phone number"
                    type="email"
                    ref={emailInputRef}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Set the username
                />
                <input
                    className="inputpassword"
                    name="password"
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Set the password
                />
                <div>
                    <button className="loginbutton" onClick={signin}>Log In</button>
                </div>
                <div className="forgetpassword">Forgotten password?</div>
                <button className="register"><a href="/sign-up">Create New Account</a></button>
            </div>
        </div>
    );
};

export default Login;
