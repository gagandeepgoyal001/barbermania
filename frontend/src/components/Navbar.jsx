import React from 'react';
import { Link } from 'react-router-dom'; // Using Link for React Router
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">BarberMania</Link>
            </div>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/contact">Contact</Link>
                <div className="dropdown">
                    <button className="dropdown-btn">Login/Register</button>
                    <div className="dropdown-content">
                        <Link to="/barber/login">For Barbers</Link>
                        <Link to="/customer/login">For Customers</Link>
                    </div>
                </div>
                <Link to="/explore-barbers" className="cta-btn">Explore Barbers</Link>
                {/* New Buttons for Dashboards */}
                <Link to="/customer/dashboard" className="dashboard-btn">Customer Dashboard</Link>
                <Link to="/barber/dashboard" className="dashboard-btn">Barber Dashboard</Link>
            </div>
        </nav>
    );
};

export default Navbar;
