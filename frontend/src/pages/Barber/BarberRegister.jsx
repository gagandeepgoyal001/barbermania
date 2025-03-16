import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/BarberRegister.css'; // Custom CSS for the registration page

const BarberRegister = () => {
    // State management for form fields
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [experience, setExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [profilePic, setProfilePic] = useState(null);

    // Handle file upload
    const handleFileChange = (e) => {
        setProfilePic(e.target.files[0]);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        // Process the form data here (e.g., send to an API)
        console.log("Registration data", { name, email, phone, address, experience, skills, profilePic });
    };

    return (
        <div className="register-container">
            <h2>Barber Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your full name"
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number"
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
                        placeholder="Create a password"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <textarea
                        id="address"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter your address"
                        required
                    ></textarea>
                </div>

                <div className="form-group">
                    <label htmlFor="experience">Years of Experience</label>
                    <input
                        type="number"
                        id="experience"
                        name="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder="Enter your years of experience"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="skills">Special Skills (e.g., fade, styling, trimming, etc.)</label>
                    <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        placeholder="List your special skills"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="profilePic">Profile Picture</label>
                    <input
                        type="file"
                        id="profilePic"
                        name="profilePic"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                    />
                </div>

                <button type="submit" className="btn-primary">Register</button>
            </form>
            <p>
                Already have an account? <Link to="/barber/login">Login Here</Link>
            </p>
        </div>
    );
};

export default BarberRegister;
