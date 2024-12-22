import React, { useReducer, useState } from 'react'; 
import axios from 'axios';
import '../assets/css/Login.scss';
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import type { SignupForm } from '../interfaces/interface';
import { successAlert, errorAlert } from '../utilities/alert';
import { signUp, confirmSignUp } from 'aws-amplify/auth';

const Signup: React.FC = () => {
    const initialState: SignupForm = {
        name: null,
        email: null,
        password: null,
        cpassword: null,
        file: null,
        code: '' // New field for confirmation code
    };

    const reducers = (state: SignupForm, action: any) => {
        switch (action.type) {
            case 'UPDATE_FIELD':
                return {
                    ...state,
                    [action.field]: action.value
                };
            default:
                return state;
        }
    };

    const [formInput, dispatch] = useReducer(reducers, initialState);
    const [fileName, setFile] = useState<File | null>(null);
    const [isConfirming, setIsConfirming] = useState(false); // To toggle between signup and confirmation forms

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: event.target.name,
            value: event.target.value
        });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
            dispatch({
                type: 'UPDATE_FIELD',
                field: event.target.name,
                value: event.target.files[0]
            });
        } else {
            setFile(null);
            dispatch({
                type: 'UPDATE_FIELD',
                field: event.target.name,
                value: null
            });
        }
    };

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let username: string = formInput.email ?? 'default@example.com';
        let password: string = formInput.password ?? 'defaultPassword';

        let options = {
            userAttributes: {
                gender:'male'
            }
        };

        try {
            await signUp({ username, password,  options });
            successAlert('Signup successful! Please check your email for the confirmation code.');
            setIsConfirming(true); // Switch to confirmation form
        } catch (error: any) {
            errorAlert(error.message);
        }
    };

    const handleConfirmation = async (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        // let username: string = formInput.email ?? 'default@example.com';
        // let code: string = formInput.code ?? '';

        // try {
        //     await confirmSignUp({username});
        //     successAlert('Account confirmed successfully! You can now log in.');
        //     // Redirect or take further actions
        // } catch (error: any) {
        //     errorAlert(error.message);
        // }
    };

    return (
        <div className="main__container">
            <div className="text__container">
                <span>NexusStore</span>
                <p>Join NexusStore Today! Sign up now to experience the ultimate e-commerce platform</p>
            </div>
            <div className="login__container">
                <div className="profile" onClick={() => document.getElementById('file-upload')?.click()}>
                    {fileName ? (
                        <img className='actualimage' src={URL.createObjectURL(fileName)} alt="Profile" />
                    ) : (
                        <CgProfile className='profileImage' />
                    )}
                    <FaPlus className='profileImageUpload' />
                </div>
                {!isConfirming ? (
                    <form onSubmit={handleSignup}>
                        <input type="file" id="file-upload" name="file" accept="image/*" hidden onChange={handleFileChange} />
                        <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} />
                        <input type="email" name="email" placeholder="Email Address" onChange={handleInputChange} />
                        <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                        <input type="password" name="cpassword" placeholder="Confirm Password" onChange={handleInputChange} />
                        <div><button type="submit">Sign Up</button></div>
                        <div style={{ color: "black" }}>Already have an account?</div>
                        <button type="button" className="register"><a href="/sign-up">Go To Login</a></button>
                    </form>
                ) : (
                    <form onSubmit={handleConfirmation}>
                        <input type="text" name="code" placeholder="Confirmation Code" onChange={handleInputChange} />
                        <div><button type="submit">Confirm</button></div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Signup;
