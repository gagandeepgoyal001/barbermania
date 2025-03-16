import React, { useState } from "react";
import "../../styles/CustomerNotifications.css";

const CustomerNotifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "Your appointment with John's Barber Shop is confirmed for 2024-12-25 at 3:00 PM.",
      type: "Appointment Confirmation",
      date: "2024-12-23",
      read: false,
    },
    {
      id: 2,
      message: "Elite Barbers has added a new service: Hair Spa. Check it out now!",
      type: "New Service Announcement",
      date: "2024-12-20",
      read: true,
    },
    {
      id: 3,
      message: "Your favorite barber, Modern Cuts, has updated their working hours.",
      type: "Update Notification",
      date: "2024-12-18",
      read: false,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="customer-notifications">
      <div className="header">
        <h1>Notifications</h1>
        <button className="clear-button" onClick={clearNotifications}>
          Clear All
        </button>
      </div>
      {notifications.length > 0 ? (
        <div className="notifications-list">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-card ${
                notification.read ? "read" : "unread"
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <h2 className="notification-type">{notification.type}</h2>
              <p className="notification-message">{notification.message}</p>
              <span className="notification-date">{notification.date}</span>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-notifications">No notifications available.</p>
      )}
    </div>
  );
};

export default CustomerNotifications;
