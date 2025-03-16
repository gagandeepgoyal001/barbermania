import React, { useState } from 'react';
import '../../styles/ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [newService, setNewService] = useState('');

    const handleAddService = () => {
        setServices([...services, newService]);
        setNewService('');
    };

    const handleRemoveService = (index) => {
        setServices(services.filter((_, i) => i !== index));
    };

    return (
        <div>
           
            <div className="manage-services-container">
                <h1>Manage Services</h1>
                <div className="service-form">
                    <input
                        type="text"
                        placeholder="Add a new service"
                        value={newService}
                        onChange={(e) => setNewService(e.target.value)}
                    />
                    <button onClick={handleAddService}>Add Service</button>
                </div>
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            {service}{' '}
                            <button onClick={() => handleRemoveService(index)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ManageServices;
