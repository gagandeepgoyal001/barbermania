import React, { useState } from 'react';
import '../../styles/CustomerProfile.css';
import { FaEdit, FaCamera, FaPlus } from 'react-icons/fa';

const CustomerProfile = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    profilePic: '',
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890',
    gender: 'Male',
    city: 'New York',
    bio: 'Hello! I love exploring new barbers and sharing my experiences.',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const toggleEditing = () => {
    setEditing(!editing);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      setProfile({ ...profile, profilePic: fileURL });
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-pic-container">
          <img
            src={profile.profilePic || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="profile-pic"
          />
          <label htmlFor="upload-pic" className="upload-pic-btn">
            <FaCamera />
            <input
              type="file"
              id="upload-pic"
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
          </label>
        </div>
        <h2>{profile.fullName}</h2>
        <p>{profile.city}</p>
      </div>

      <div className="profile-details">
        <h3>Profile Details</h3>
        <button className="edit-btn" onClick={toggleEditing}>
          {editing ? 'Save Changes' : <><FaEdit /> Edit Profile</>}
        </button>
        <form>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleInputChange}
              disabled={!editing}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              disabled={!editing}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleInputChange}
              disabled={!editing}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleInputChange}
              disabled={!editing}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={profile.city}
              onChange={handleInputChange}
              disabled={!editing}
            />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea
              name="bio"
              value={profile.bio}
              onChange={handleInputChange}
              disabled={!editing}
            />
          </div>
        </form>
      </div>

      <div className="profile-progress">
        <h3>Profile Completion</h3>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${(Object.values(profile).filter((val) => val).length / Object.keys(profile).length) * 100}%`,
            }}
          ></div>
        </div>
        <p>
          {Object.values(profile).filter((val) => val).length}/{Object.keys(profile).length}{' '}
          completed
        </p>
      </div>

      <div className="profile-extra">
        <h3>Extra Features</h3>
        <button className="add-feature-btn">
          <FaPlus /> Add Additional Info
        </button>
      </div>
    </div>
  );
};

export default CustomerProfile;
