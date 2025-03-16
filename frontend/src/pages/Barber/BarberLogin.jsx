import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BarberLogin.css';

const BarberLogin = () => {
    const [emailOrPhone, setEmailOrPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted with", { emailOrPhone, password });
    };

    return (
        <div className="login-container">
            <h2>Barber Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="emailOrPhone">Email or Phone Number</label>
                    <input
                        type="text"
                        id="emailOrPhone"
                        name="emailOrPhone"
                        value={emailOrPhone}
                        onChange={(e) => setEmailOrPhone(e.target.value)}
                        placeholder="Enter your email or phone number"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <div className="options">
                    <label>
                        <input type="checkbox" name="rememberMe" />
                        Remember Me
                    </label>
                </div>
                <button type="submit" className="btn-primary">Login</button>
                <p>
                    Don't have an account? <Link to="/barber/register">Register Here</Link>
                </p>
            </form>
        </div>
    );
};

export default BarberLogin;
