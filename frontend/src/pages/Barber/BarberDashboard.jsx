import React, { useState } from 'react';
import '../../styles/BarberDashboard.css';
import {
  FaUser,
  FaCut,
  FaCalendarAlt,
  FaStar,
  FaBullhorn,
  FaChartLine,
  FaFileAlt,
  FaBars,
  FaMoon,
  FaSun,
  FaSignOutAlt,
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for navigation

// Sidebar Component
const Sidebar = ({ sidebarOpen, toggleSidebar }) => {
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
          <Link to="/barber/services">
            <FaCut title="Services Management" /> My Services
          </Link>
          <Link to="/barber/bookings">
            <FaCalendarAlt title="Bookings" /> Bookings
          </Link>
          <Link to="/barber/reviews">
            <FaStar title="Reviews" /> Reviews
          </Link>
          <Link to="/barber/promotions">
            <FaBullhorn title="Promotions" /> Promotions
          </Link>
          <Link to="/barber/analytics">
            <FaChartLine title="Analytics" /> Analytics
          </Link>
          <Link to="/barber/settings">
            <FaFileAlt title="Settings" /> Settings
          </Link>
          <Link to="/logout">
            <FaSignOutAlt title="Logout" /> Logout
          </Link>
        </>
      )}
    </aside>
  );
};

// Main Component
const BarberDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
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
          <FaUser size={20} title="Profile" />
        </div>
      </nav>

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <main
        className="dashboard-content"
        style={{
          marginLeft: sidebarOpen ? '270px' : '70px', // Adjust margin dynamically
          transition: 'margin-left 0.3s ease', // Smooth transition
        }}
      >
        <h1>Welcome, Barber</h1>
        <section className="widget-section">
          {[
            {
              title: 'Profile Management',
              desc: 'Edit your profile, bio, and social media links.',
              path: '/barber/profile',
            },
            {
              title: 'Services Management',
              desc: 'Add, edit, or remove services with pricing details.',
              path: '/barber/services',
            },
            {
              title: 'Manage Bookings',
              desc: 'Accept or decline bookings and view your calendar.',
              path: '/barber/bookings',
            },
            {
              title: 'Reviews & Ratings',
              desc: 'Respond to customer reviews and manage your reputation.',
              path: '/barber/reviews',
            },
            {
              title: 'Promotions',
              desc: 'Create offers and send automated reminders.',
              path: '/barber/promotions',
            },
            {
              title: 'Analytics',
              desc: 'Track revenue, bookings, and trends for better insights.',
              path: '/barber/analytics',
            },
          ].map((widget, index) => (
            <Link key={index} to={widget.path} className="widget-link">
              <div className="widget">
                <h3>{widget.title}</h3>
                <p>{widget.desc}</p>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
};

export default BarberDashboard;
