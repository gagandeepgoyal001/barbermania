import React, { useState, useEffect } from "react";
import "../styles/ExploreBarbers.css";

const ExploreBarbers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [filters, setFilters] = useState({
    minRating: 0,
    maxExperience: 10,
    serviceType: "",
  });
  const [barbers, setBarbers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [barbersPerPage] = useState(5);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBarbers([
        {
          id: 1,
          name: "John's Barber Shop",
          location: "Downtown",
          hours: "9 AM - 9 PM",
          rating: 4.5,
          experience: 5,
          services: [
            {
              name: "Haircut",
              price: "$20",
              rating: 4.8,
              photo: "https://via.placeholder.com/150",
            },
            {
              name: "Beard Trim",
              price: "$15",
              rating: 4.7,
              photo: "https://via.placeholder.com/150",
            },
          ],
          photo: "https://via.placeholder.com/400",
        },
        // Add more barbers as needed
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = () => {
    console.log("Search Query:", searchQuery, "Location:", location);
  };

  const applyFilters = () => {
    console.log("Filters applied:", filters);
    setShowFilters(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedBarbers = barbers.slice(
    (currentPage - 1) * barbersPerPage,
    currentPage * barbersPerPage
  );

  return (
    <div className="explore-barbers">
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <select
          className="location-dropdown"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="All Locations">All Locations</option>
          <option value="Downtown">Downtown</option>
          <option value="Uptown">Uptown</option>
        </select>
        <input
          type="text"
          className="search-bar"
          placeholder="Search barbers or services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        <button
          className="filter-button"
          onClick={() => setShowFilters(!showFilters)}
        >
          Filters
        </button>
      </div>

      {/* Filter Modal */}
      {showFilters && (
        <div className="filter-modal">
          <div className="filter-content">
            <h3>Apply Filters</h3>
            <label>
              Minimum Rating:
              <input
                type="number"
                value={filters.minRating}
                onChange={(e) =>
                  setFilters({ ...filters, minRating: e.target.value })
                }
              />
            </label>
            <label>
              Maximum Experience (years):
              <input
                type="number"
                value={filters.maxExperience}
                onChange={(e) =>
                  setFilters({ ...filters, maxExperience: e.target.value })
                }
              />
            </label>
            <label>
              Service Type:
              <input
                type="text"
                value={filters.serviceType}
                onChange={(e) =>
                  setFilters({ ...filters, serviceType: e.target.value })
                }
              />
            </label>
            <div className="filter-actions">
              <button onClick={applyFilters}>Apply</button>
              <button onClick={() => setShowFilters(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="barber-list">
        {loading ? (
          <p>Loading...</p>
        ) : paginatedBarbers.length > 0 ? (
          paginatedBarbers.map((barber) => (
            <div key={barber.id} className="barber-card">
              <img
                src={barber.photo}
                alt={barber.name}
                className="barber-photo"
              />
              <div className="barber-details">
                <h2>{barber.name}</h2>
                <p>Location: {barber.location}</p>
                <p>Working Hours: {barber.hours}</p>
                <p>Ratings: {barber.rating}⭐</p>
                <p>Experience: {barber.experience} years</p>
              </div>
              <div className="services">
                <h3>Services</h3>
                {barber.services.map((service, index) => (
                  <div key={index} className="service-card">
                    <img
                      src={service.photo}
                      alt={service.name}
                      className="service-photo"
                    />
                    <div className="service-details">
                      <p>{service.name}</p>
                      <p>Price: {service.price}</p>
                      <p>Rating: {service.rating}⭐</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No barbers found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          disabled={currentPage * barbersPerPage >= barbers.length}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExploreBarbers;
