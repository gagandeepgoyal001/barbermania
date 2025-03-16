import React from 'react';
import '../../styles/Analytics.css';

const Analytics = () => {
    const data = [
        { label: 'Total Revenue', value: '$15,230' },
        { label: 'Active Users', value: '315' },
        { label: 'Monthly Bookings', value: '580' },
    ];

    return (
        <div>
            
            <div className="analytics">
                <h1>Platform Analytics</h1>
                <div className="analytics-cards">
                    {data.map((item, index) => (
                        <div key={index} className="analytics-card">
                            <h2>{item.label}</h2>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Analytics;
