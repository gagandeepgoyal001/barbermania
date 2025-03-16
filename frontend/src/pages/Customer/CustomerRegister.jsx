import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/CustomerRegister.css';

const Register = () => {
    return (
        <div className="register-container">
            <h2>Create Your Account</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="profilePic">Profile Picture</label>
                    <input type="file" id="profilePic" name="profilePic" />
                </div>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter your phone number"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" name="gender" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="Enter your city"
                        required
                    />
                </div>
                <button type="submit" className="btn-primary">Register</button>
                <p>
                    Already have an account? <Link to="/customer/login">Login Here</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
