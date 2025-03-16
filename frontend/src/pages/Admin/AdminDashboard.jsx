import React from 'react';
import '../../styles/AdminDashboard.css';

const AdminDashboard = () => {
    return (
        <div>
        
            <div className="admin-dashboard">
                <h1>Admin Dashboard</h1>
                <div className="dashboard-cards">
                    <div className="card">
                        <h2>Total Users</h2>
                        <p>245</p>
                    </div>
                    <div className="card">
                        <h2>Total Barbers</h2>
                        <p>68</p>
                    </div>
                    <div className="card">
                        <h2>Total Bookings</h2>
                        <p>1,432</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
