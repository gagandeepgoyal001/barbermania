import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Button from '../components/SharedComponents/Button';
import '../styles/Home.css';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [location, setLocation] = useState('All Locations');

    const handleSearch = () => {
        setIsLoading(true);
        // Implement search logic here
        setTimeout(() => {
            setIsLoading(false);
            alert("Search functionality not implemented yet!");
        }, 2000); // Simulate a loading state
    };

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>Welcome to BarberMania</h1>
                    <p>
                        Discover top-rated barbers in your city and book your appointment with ease. 
                        Your next great haircut or grooming experience is just a click away.
                    </p>
                    <Button
                        label="Explore Barbers"
                        onClick={() => (window.location.href = '/explore-barbers')}
                        type="primary"
                    />
                </div>
            </section>

            {/* Search Bar Section */}
            <div className="search-bar-container">
                <select
                    className="search-dropdown"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="All Locations">All Locations</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                </select>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Barber Name or Service..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" onClick={handleSearch}>
                    {isLoading ? <span className="loader"></span> : <FaSearch />}
                    Search
                </button>
            </div>

            {/* Features Section */}
            <section className="features-section">
                <h2>Why Choose BarberMania?</h2>
                <div className="features-container">
                    <div className="feature-item">
                        <span className="feature-icon">📅</span>
                        <h3>Easy Booking</h3>
                        <p>Seamlessly book appointments with your preferred barber.</p>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">⭐</span>
                        <h3>Top-rated Barbers</h3>
                        <p>Browse reviews and ratings to find the best service.</p>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">💸</span>
                        <h3>Transparent Pricing</h3>
                        <p>No surprises. Know the cost before you book.</p>
                    </div>
                </div>
            </section>

            {/* Promotional Section */}
            <section className="promo-section">
                <h2>Exciting Offers Just For You</h2>
                <p>Enjoy discounts on your favorite services. Book now to save big!</p>
                <Button
                    label="View Offers"
                    onClick={() => (window.location.href = '/offers')}
                    type="primary"
                />
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section">
                <h2>What Our Customers Say</h2>
                <div className="testimonials-container">
                    <blockquote>
                        "BarberMania made finding a quality barber so easy. Highly recommend!" - Jane D.
                    </blockquote>
                    <blockquote>
                        "Best grooming experience I’ve had in years. 5 stars!" - John S.
                    </blockquote>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="home-footer">
                <p>&copy; 2024 BarberMania. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;