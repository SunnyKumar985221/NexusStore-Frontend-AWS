import React, { useReducer, useState } from 'react';
import axios from 'axios';
import '../assets/css/Login.scss';
import { CgProfile } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import type { SignupForm } from '../interfaces/interface';

const Signup: React.FC = () => {
    const initialState: SignupForm = {
        name: null,
        email: null,
        password: null,
        cpassword: null,
        file: null
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
 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: 'UPDATE_FIELD',
            field: event.target.name,
            value: event.target.value
        });
    };
    console.log(formInput)
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
            console.log("event.target.name", event.target.name);
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


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let formdata = new FormData();

        formdata.append("name", formInput.name ?? 'sunny');
        formdata.append("email", formInput.email ?? 'null');
        formdata.append("password", formInput.password ?? 'null');
        formdata.append("cpassword", formInput.cpassword ?? 'null');
        // if (formInput.file) formdata.append("file", formInput.file);

        try {
            const response = await axios.post('https://2vdglfhy25.execute-api.ap-south-1.amazonaws.com/dev/signup', formInput );
            console.log("error hai", response);
            // Check the response status or structure
            if (response.status === 200) {
                console.log('Send successfully');
            } else {
                console.log('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error occurred during submission:', error);
        }
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
                <form onSubmit={handleSubmit}>
                    <input type="file" id="file-upload" name="file" accept="image/*" hidden onChange={handleFileChange} />
                    <input type="text" name="name" placeholder="Full Name" onChange={handleInputChange} />
                    <input type="email" name="email" placeholder="Email Address or Phone Number" onChange={handleInputChange} />
                    <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                    <input type="password" name="cpassword" placeholder="Confirm Password" onChange={handleInputChange} />
                    <div><button type="submit">Sign Up</button></div>
                    <div style={{ color: "black" }}>Already have an account?</div>
                    <button type="button" className="register"><a href="/sign-up">Go To Login</a></button>
                </form>
            </div>

        </div >
    );
}

export default Signup;
