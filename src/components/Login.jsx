import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from '../features/userSlice';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            email: email,
            password: password,
            loggetIn: true,
        }));
    }

    return (
        <div className="login">
            <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Login</h1>
                <input 
                    type="email" 
                    placeholder="e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="button-submit">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}
 
export default Login;