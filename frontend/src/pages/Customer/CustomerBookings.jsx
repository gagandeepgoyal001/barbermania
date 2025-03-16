import React, { useState, useEffect } from "react";
import "../../styles/CustomerBookings.css";

const CustomerBookings = () => {
  const [bookings, setBookings] = useState([]); // Stores booking data
  const [loading, setLoading] = useState(true); // Indicates loading state
  const [searchQuery, setSearchQuery] = useState(""); // Handles search

  // Fetch booking data (mock API call)
  useEffect(() => {
    setTimeout(() => {
      setBookings([
        {
          id: 1,
          customerName: "Alice Johnson",
          barberName: "John Doe",
          service: "Haircut",
          date: "2024-07-24",
          time: "10:00 AM",
          price: "$25",
          status: "Completed",
        },
        {
          id: 2,
          customerName: "Bob Smith",
          barberName: "Jane Doe",
          service: "Beard Trim",
          date: "2024-07-25",
          time: "2:00 PM",
          price: "$15",
          status: "Upcoming",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter bookings based on search query
  const filteredBookings = bookings.filter((booking) =>
    booking.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.barberName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    booking.service.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="customer-bookings">
      <h1 className="title">Customer Bookings</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by customer, barber, or service..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Booking List */}
      <div className="booking-list">
        {loading ? (
          <p>Loading bookings...</p>
        ) : filteredBookings.length > 0 ? (
          filteredBookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <div className="booking-info">
                <p><strong>Customer:</strong> {booking.customerName}</p>
                <p><strong>Barber:</strong> {booking.barberName}</p>
                <p><strong>Service:</strong> {booking.service}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Time:</strong> {booking.time}</p>
                <p><strong>Price:</strong> {booking.price}</p>
                <p><strong>Status:</strong> {booking.status}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerBookings;