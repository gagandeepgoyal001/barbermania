import React, { useState } from 'react';
import '../../styles/BarberBookings.css';

const Bookings = () => {
    const [bookings, setBookings] = useState([
        { id: 1, customer: 'John Doe', service: 'Haircut', date: '2024-12-21' },
        { id: 2, customer: 'Jane Smith', service: 'Beard Trim', date: '2024-12-22' },
    ]);

    return (
        <div>
            
            <div className="bookings-container">
                <h1>Bookings</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking.id}>
                                <td>{booking.id}</td>
                                <td>{booking.customer}</td>
                                <td>{booking.service}</td>
                                <td>{booking.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
