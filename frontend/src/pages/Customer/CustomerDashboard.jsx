import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/CustomerDashboard.css';
import {
  FaUser,
  FaHeart,
  FaCalendarAlt,
  FaStar,
  FaBell,
  FaCreditCard,
  FaFileAlt,
  FaSearch,
  FaBars,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from 'react-icons/fa';

// Sidebar Component
const Sidebar = ({ sidebarOpen, toggleSidebar, handleLogout }) => {
  return (
    <aside className={`sidebar ${sidebarOpen ? 'open' : 'collapsed'}`}>
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FaBars />
      </button>
      {sidebarOpen && (
        <>
          <h2>BarberMania</h2>
          <a href="/customer/bookings">
            <FaCalendarAlt title="Bookings" /> Bookings
          </a>
          <a href="/customer/favourites">
            <FaHeart title="Favorites" /> Favorites
          </a>
          <a href="/customer/reviews">
            <FaStar title="Reviews" /> Reviews
          </a>
          <a href="/customer/notifications">
            <FaBell title="Notifications" /> Notifications
          </a>
          <a href="/customer/payments">
            <FaCreditCard title="Payments" /> Payments
          </a>
          <a href="/customer/policies">
            <FaFileAlt title="Policies" /> Policies
          </a>
          <button onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt title="Logout" /> Logout
          </button>
        </>
      )}
    </aside>
  );
};

// Main Component
const CustomerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleSearch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert('Search functionality coming soon!');
    }, 1000);
  };

  const handleLogout = () => {
    // Perform any logout-related cleanup here, like clearing tokens or session data
    navigate('/');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className={`dashboard-container ${darkMode ? 'dark' : ''}`}>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">BarberMania</a>
        </div>
        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact</a>
          <a href="/explore-barbers" className="cta-btn">
            Explore Barbers
          </a>
        </div>
        <div className="navbar-actions">
          <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
          <Link to="/customer/profile" title="Profile">
            <FaUser size={20} />
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        handleLogout={handleLogout}
      />

      {/* Main Content */}
      <main
        className="dashboard-content"
        style={{
          marginLeft: sidebarOpen ? '270px' : '70px',
          transition: 'margin-left 0.3s ease',
        }}
      >
        <h1>Welcome, John Doe</h1>
        <div className="search-bar-container">
          <select className="search-dropdown">
            <option>Location</option>
            <option>New York</option>
            <option>Los Angeles</option>
            <option>Chicago</option>
          </select>
          <input
            type="text"
            className="search-input"
            placeholder="Barber Name or Service..."
          />
          <button className="search-button" onClick={handleSearch}>
            {isLoading ? <span className="loader"></span> : <FaSearch />}
            Search
          </button>
        </div>
        <section className="widget-section">
          {[
            {
              title: 'Book a Barber',
              desc: 'Find and book your favorite barber easily.',
              path: '/explore-barbers',
            },
            {
              title: 'View Favorites',
              desc: 'Check out your saved barbers.',
              path: '/customer/favourites',
            },
            {
              title: 'Appointments',
              desc: 'Track and manage your bookings.',
              path: '/customer/appointments',
            },
            {
              title: 'Notifications',
              desc: 'Stay updated with booking statuses and offers.',
              path: '/customer/notifications',
            },
            {
              title: 'Payments',
              desc: 'Securely manage payments and discounts.',
              path: '/customer/payments',
            },
          ].map((widget, index) => (
            <div
              key={index}
              className="widget"
              onClick={() => handleNavigation(widget.path)}
              style={{ cursor: 'pointer' }}
            >
              <h3>{widget.title}</h3>
              <p>{widget.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default CustomerDashboard;
