import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CustomerLogin.css';

const Login = () => {
    return (
        <div className="login-container">
            <h2>Customer Login</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="emailOrPhone">Email or Phone Number</label>
                    <input
                        type="text"
                        id="emailOrPhone"
                        name="emailOrPhone"
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
                    Don't have an account? <Link to="/customer/register">Register Here</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
