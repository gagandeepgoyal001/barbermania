import React from 'react';
import '../../styles/BarberProfile.css';

const BarberProfile = ({ match }) => {
    const barberId = match.params.id; // Extract barber ID from route params
    const barber = {
        name: 'John\'s Barbershop',
        location: 'Downtown',
        rating: 4.5,
        services: ['Haircut', 'Beard Trim', 'Facial'],
        gallery: ['/assets/haircut1.jpg', '/assets/haircut2.jpg'],
    };

    return (
        <div>
            
            <div className="barber-profile-container">
                <h1>{barber.name}</h1>
                <p>Location: {barber.location}</p>
                <p>Rating: {barber.rating}⭐</p>
                <h2>Services</h2>
                <ul>
                    {barber.services.map(service => (
                        <li key={service}>{service}</li>
                    ))}
                </ul>
                <h2>Gallery</h2>
                <div className="gallery">
                    {barber.gallery.map((img, index) => (
                        <img key={index} src={img} alt="Service preview" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BarberProfile;
