import React, { useState } from "react";
import "../../styles/CustomerPolicies.css";

const CustomerPolicies = () => {
  const [policies, setPolicies] = useState([
    {
      id: 1,
      title: "Cancellation Policy",
      description:
        "Cancellations must be made at least 24 hours before your appointment to avoid charges. Late cancellations will incur a 50% fee.",
    },
    {
      id: 2,
      title: "Refund Policy",
      description:
        "Refunds are processed within 7-10 business days for eligible transactions. Please contact customer support for assistance.",
    },
    {
      id: 3,
      title: "Privacy Policy",
      description:
        "Your personal data is securely stored and used only for booking and payment purposes. We do not share your information with third parties.",
    },
    {
      id: 4,
      title: "Terms and Conditions",
      description:
        "By booking with us, you agree to comply with our terms and conditions, including punctuality, adherence to service guidelines, and payment policies.",
    },
  ]);

  const addPolicy = () => {
    const newPolicy = {
      id: policies.length + 1,
      title: "New Policy",
      description: "This is a new policy added dynamically.",
    };
    setPolicies([...policies, newPolicy]);
  };

  return (
    <div className="customer-policies">
      <h1 className="header">Customer Policies</h1>
      <div className="policies-container">
        {policies.map((policy) => (
          <div key={policy.id} className="policy-card">
            <h2 className="policy-title">{policy.title}</h2>
            <p className="policy-description">{policy.description}</p>
          </div>
        ))}
      </div>
      <button className="add-policy-button" onClick={addPolicy}>
        Add Policy
      </button>
    </div>
  );
};

export default CustomerPolicies;
