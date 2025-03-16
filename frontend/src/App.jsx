import React from "react";
import { Routes, Route } from "react-router-dom";
import './styles/App.css';

// Import layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ExploreBarbers from "./pages/ExploreBarbers";

// Barber Pages
import BarberDashboard from "./pages/Barber/BarberDashboard";
import BarberManageProfile from "./pages/Barber/BarberManageProfile";
import BarberManageServices from "./pages/Barber/BarberManageServices";
import BarberBookings from "./pages/Barber/BarberBookings";
import BarberLogin from './pages/Barber/BarberLogin';  
import BarberRegister from './pages/Barber/BarberRegister';

// Customer Pages
import CustomerDashboard from "./pages/Customer/CustomerDashboard";
import CustomerSearchBarbers from "./pages/Customer/CustomerSearchBarbers";
import CustomerBarberProfile from "./pages/Customer/CustomerBarberProfile";
import CustomerBookings from "./pages/Customer/CustomerBookings";
import CustomerLogin from './pages/Customer/CustomerLogin';
import CustomerRegister from './pages/Customer/CustomerRegister';
import CustomerFavourite from './pages/Customer/CustomerFavourite';
import CustomerReviews from './pages/Customer/CustomerReviews';
import CustomerNotifications from './pages/Customer/CustomerNotifications';
import CustomerPayments from './pages/Customer/CustomerPayments';
import CustomerPolicies from './pages/Customer/CustomerPolicies';
import CustomerAppointments from './pages/Customer/CustomerAppointments';
import CustomerProfile from './pages/Customer/CustomerProfile';

// Admin Pages
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminManageUsers from "./pages/Admin/AdminManageUsers";
import AdminAnalytics from "./pages/Admin/AdminAnalytics";

const App = () => {
    return (
        <div className="App">
            {/* Navbar at the top */}
            <Navbar />

            {/* Main content area with routes */}
            <Routes>
                {/* General Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/customer/login" element={<CustomerLogin />} />
                <Route path="/customer/register" element={<CustomerRegister />} />
                <Route path="/explore-barbers" element={<ExploreBarbers />} />
                <Route path="/barber/login" element={<BarberLogin />} />
                <Route path="/barber/register" element={<BarberRegister />} />

                {/* Barber Routes */}
                <Route path="/barber/dashboard" element={<BarberDashboard />} />
                <Route path="/barber/manage-profile" element={<BarberManageProfile />} />
                <Route path="/barber/manage-services" element={<BarberManageServices />} />
                <Route path="/barber/bookings" element={<BarberBookings />} />

                {/* Customer Routes */}
                <Route path="/customer/dashboard" element={<CustomerDashboard />} />
                <Route path="/customer/search-barbers" element={<CustomerSearchBarbers />} />
                <Route path="/customer/barber-profile/:id" element={<CustomerBarberProfile />} />
                <Route path="/customer/bookings" element={<CustomerBookings />} />
                <Route path="/customer/favourites" element={<CustomerFavourite />} />
                <Route path="/customer/reviews" element={<CustomerReviews />} />
                <Route path="/customer/notifications" element={<CustomerNotifications />} />
                <Route path="/customer/payments" element={<CustomerPayments />} />
                <Route path="/customer/policies" element={<CustomerPolicies />} />
                <Route path="/customer/appointments" element={<CustomerAppointments />} />
                <Route path="/customer/profile" element={<CustomerProfile />} />

                {/* Admin Routes */}
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/manage-users" element={<AdminManageUsers />} />
                <Route path="/admin/analytics" element={<AdminAnalytics />} />
            </Routes>

            {/* Footer at the bottom */}
            <Footer />
        </div>
    );
};

export default App;
