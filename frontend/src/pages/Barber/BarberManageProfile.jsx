import React, { useState } from 'react';
import '../../styles/ManageProfile.css';

const ManageProfile = () => {
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        bio: '',
        image: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleImageChange = (e) => {
        setProfile({ ...profile, image: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile updated:', profile);
        alert('Profile updated successfully!');
    };

    return (
        <div>
            
            <div className="manage-profile-container">
                <h1>Manage Profile</h1>
                <form className="profile-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={profile.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={profile.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={profile.phone}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="bio"
                        placeholder="Short Bio"
                        value={profile.bio}
                        onChange={handleChange}
                    ></textarea>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                    <button type="submit">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default ManageProfile;
