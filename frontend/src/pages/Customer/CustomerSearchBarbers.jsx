import React, { useState } from 'react';
import '../../styles/SearchBarbers.css';

const SearchBarbers = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = () => {
        // Mock data for barbers; replace with API call
        const mockBarbers = [
            { id: 1, name: 'John\'s Barbershop', location: 'Downtown', rating: 4.5 },
            { id: 2, name: 'Elite Cuts', location: 'Uptown', rating: 4.8 },
        ];
        setResults(mockBarbers.filter(barber => barber.name.toLowerCase().includes(query.toLowerCase())));
    };

    return (
        <div>
            
            <div className="search-barbers-container">
                <h1>Search Barbers</h1>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for barbers..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                <div className="results">
                    {results.map(barber => (
                        <div key={barber.id} className="barber-card">
                            <h2>{barber.name}</h2>
                            <p>Location: {barber.location}</p>
                            <p>Rating: {barber.rating}⭐</p>
                            <a href={`/barber/${barber.id}`} className="view-profile">View Profile</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchBarbers;
