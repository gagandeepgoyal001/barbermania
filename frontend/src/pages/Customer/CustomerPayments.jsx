import React, { useState } from "react";
import "../../styles/CustomerPayments.css";

const CustomerPayments = () => {
  const [paymentHistory, setPaymentHistory] = useState([
    {
      id: 1,
      date: "2024-12-20",
      amount: "$45",
      barber: "John's Barber Shop",
      status: "Completed",
    },
    {
      id: 2,
      date: "2024-12-15",
      amount: "$30",
      barber: "Elite Barbers",
      status: "Refunded",
    },
    {
      id: 3,
      date: "2024-12-10",
      amount: "$50",
      barber: "Modern Cuts",
      status: "Completed",
    },
  ]);

  const [newPaymentMethod, setNewPaymentMethod] = useState("");

  const handleAddPaymentMethod = () => {
    if (newPaymentMethod.trim()) {
      alert(`New payment method "${newPaymentMethod}" added successfully!`);
      setNewPaymentMethod("");
    }
  };

  return (
    <div className="customer-payments">
      <div className="header">
        <h1>Payment History</h1>
      </div>
      {paymentHistory.length > 0 ? (
        <div className="payment-history">
          {paymentHistory.map((payment) => (
            <div key={payment.id} className="payment-card">
              <p className="payment-date">Date: {payment.date}</p>
              <p className="payment-amount">Amount: {payment.amount}</p>
              <p className="payment-barber">Barber: {payment.barber}</p>
              <p className={`payment-status ${payment.status.toLowerCase()}`}>
                Status: {payment.status}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-payments">No payment history available.</p>
      )}
      <div className="add-payment-method">
        <h2>Add New Payment Method</h2>
        <input
          type="text"
          placeholder="Enter payment method (e.g., Visa, PayPal)"
          value={newPaymentMethod}
          onChange={(e) => setNewPaymentMethod(e.target.value)}
        />
        <button onClick={handleAddPaymentMethod}>Add Payment Method</button>
      </div>
    </div>
  );
};

export default CustomerPayments;
