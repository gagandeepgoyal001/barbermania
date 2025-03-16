import React, { useState } from 'react';
import '../../styles/BarberProfile.css';
import { FaCamera, FaPlus, FaPlay } from 'react-icons/fa';

const BarberProfile = () => {
    const [profile, setProfile] = useState({
        barberPhoto: '',
        barbershopPhotos: [],
        services: [],
    });

    const handleFileUpload = (e, type, serviceIndex = null) => {
        const file = e.target.files[0];
        if (file) {
            const fileURL = URL.createObjectURL(file);
            if (type === 'barberPhoto') {
                setProfile({ ...profile, barberPhoto: fileURL });
            } else if (type === 'barbershopPhotos') {
                setProfile({
                    ...profile,
                    barbershopPhotos: [...profile.barbershopPhotos, fileURL],
                });
            } else if (type === 'service') {
                const updatedServices = [...profile.services];
                updatedServices[serviceIndex] = {
                    ...updatedServices[serviceIndex],
                    [e.target.name]: fileURL,
                };
                setProfile({ ...profile, services: updatedServices });
            }
        }
    };

    const addService = () => {
        setProfile({
            ...profile,
            services: [
                ...profile.services,
                { beforePhoto: '', processGif: '', afterPhoto: '' },
            ],
        });
    };

    return (
        <div className="barber-profile-container">
            <div className="barber-header">
                <div className="barber-photo-container">
                    <img
                        src={profile.barberPhoto || 'https://via.placeholder.com/150'}
                        alt="Barber"
                        className="barber-photo"
                    />
                    <label htmlFor="upload-barber-photo" className="upload-photo-btn">
                        <FaCamera />
                        <input
                            type="file"
                            id="upload-barber-photo"
                            accept="image/*"
                            onChange={(e) => handleFileUpload(e, 'barberPhoto')}
                            style={{ display: 'none' }}
                        />
                    </label>
                </div>
                <h2>Barber Name</h2>
                <p>City</p>
            </div>

            <div className="barbershop-gallery">
                <h3>Barbershop Photos</h3>
                <div className="photo-gallery">
                    {profile.barbershopPhotos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt={`Barbershop ${index + 1}`}
                            className="gallery-photo"
                        />
                    ))}
                    {profile.barbershopPhotos.length < 7 && (
                        <label className="add-photo-btn">
                            <FaPlus />
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileUpload(e, 'barbershopPhotos')}
                                style={{ display: 'none' }}
                            />
                        </label>
                    )}
                </div>
            </div>

            <div className="services-section">
                <h3>Services</h3>
                {profile.services.map((service, index) => (
                    <div key={index} className="service-container">
                        <div className="service-photos">
                            <div className="photo-group">
                                <label>
                                    Before
                                    <input
                                        type="file"
                                        name="beforePhoto"
                                        accept="image/*"
                                        onChange={(e) => handleFileUpload(e, 'service', index)}
                                    />
                                </label>
                                {service.beforePhoto && (
                                    <img
                                        src={service.beforePhoto}
                                        alt="Before"
                                        className="service-photo"
                                    />
                                )}
                            </div>
                            <div className="photo-group">
                                <label>
                                    Process GIF
                                    <input
                                        type="file"
                                        name="processGif"
                                        accept="image/gif"
                                        onChange={(e) => handleFileUpload(e, 'service', index)}
                                    />
                                </label>
                                {service.processGif && (
                                    <div className="gif-preview">
                                        <FaPlay className="play-icon" />
                                        <img
                                            src={service.processGif}
                                            alt="Process"
                                            className="service-photo"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="photo-group">
                                <label>
                                    After
                                    <input
                                        type="file"
                                        name="afterPhoto"
                                        accept="image/*"
                                        onChange={(e) => handleFileUpload(e, 'service', index)}
                                    />
                                </label>
                                {service.afterPhoto && (
                                    <img
                                        src={service.afterPhoto}
                                        alt="After"
                                        className="service-photo"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <button className="add-service-btn" onClick={addService}>
                    <FaPlus /> Add Service
                </button>
            </div>
        </div>
    );
};

export default BarberProfile;
