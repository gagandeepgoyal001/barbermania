import React, { useState } from 'react';
import '../../styles/CustomerAppointments.css';
import { FaSearch, FaFilter, FaCalendarAlt } from 'react-icons/fa'; // Removed unused FaCheck and FaTimes

const CustomerAppointments = () => {
  const appointments = [ // Changed from useState to a constant as setAppointments is not used
    {
      id: 1,
      barberName: 'John Doe',
      service: 'Haircut',
      date: '2024-08-01',
      time: '10:30 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      barberName: 'Jane Smith',
      service: 'Beard Trim',
      date: '2024-07-25',
      time: '2:00 PM',
      status: 'Completed',
    },
    {
      id: 3,
      barberName: 'Alex Johnson',
      service: 'Shave',
      date: '2024-07-20',
      time: '5:00 PM',
      status: 'Pending',
    },
  ];

  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredAppointments = appointments.filter((appointment) => {
    return (
      (filter === 'All' || appointment.status === filter) &&
      appointment.barberName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="customer-appointments">
      <h1>My Appointments</h1>

      {/* Search and Filter */}
      <div className="appointments-toolbar">
        <div className="search-bar">
          <FaSearch />
          <input
            type="text"
            placeholder="Search by Barber Name"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="filter-dropdown">
          <FaFilter />
          <select value={filter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      {/* Appointments List */}
      <div className="appointments-list">
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => (
            <div key={appointment.id} className="appointment-card">
              <div className="appointment-header">
                <h3>{appointment.barberName}</h3>
                <span className={`status ${appointment.status.toLowerCase()}`}>
                  {appointment.status}
                </span>
              </div>
              <div className="appointment-details">
                <p>
                  <FaCalendarAlt /> {appointment.date} at {appointment.time}
                </p>
                <p>Service: {appointment.service}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No appointments found.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerAppointments;
