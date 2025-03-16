import React, { useState } from "react";
import "../../styles/CustomerFavourite.css";

const CustomerFavourite = () => {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "John's Barber Shop",
      location: "Downtown",
      rating: 4.5,
      photo: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Elite Barbers",
      location: "Uptown",
      rating: 4.8,
      photo: "https://via.placeholder.com/150",
    },
  ]);

  const [newBarber, setNewBarber] = useState({
    name: "",
    location: "",
    rating: "",
    photo: "",
  });

  const handleAddFavorite = () => {
    if (newBarber.name && newBarber.location && newBarber.rating && newBarber.photo) {
      setFavorites([...favorites, { ...newBarber, id: favorites.length + 1 }]);
      setNewBarber({ name: "", location: "", rating: "", photo: "" });
      alert("Barber added to favorites!");
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div className="customer-favourite">
      <h1>Your Favorite Barbers</h1>
      <div className="favourites-list">
        {favorites.map((barber) => (
          <div key={barber.id} className="favourite-card">
            <img src={barber.photo} alt={barber.name} className="barber-photo" />
            <div className="barber-details">
              <h2>{barber.name}</h2>
              <p>Location: {barber.location}</p>
              <p>Rating: {barber.rating}⭐</p>
            </div>
          </div>
        ))}
      </div>

      <div className="add-favourite">
        <h2>Add New Favorite Barber</h2>
        <input
          type="text"
          placeholder="Barber Name"
          value={newBarber.name}
          onChange={(e) => setNewBarber({ ...newBarber, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          value={newBarber.location}
          onChange={(e) => setNewBarber({ ...newBarber, location: e.target.value })}
        />
        <input
          type="text"
          placeholder="Rating (1-5)"
          value={newBarber.rating}
          onChange={(e) => setNewBarber({ ...newBarber, rating: e.target.value })}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newBarber.photo}
          onChange={(e) => setNewBarber({ ...newBarber, photo: e.target.value })}
        />
        <button onClick={handleAddFavorite}>Add to Favorite</button>
      </div>
    </div>
  );
};

export default CustomerFavourite;
