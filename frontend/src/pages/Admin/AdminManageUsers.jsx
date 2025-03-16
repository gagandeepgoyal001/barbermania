import React, { useState } from 'react';
import '../../styles/ManageUsers.css';

const ManageUsers = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', role: 'Customer', status: 'Active' },
        { id: 2, name: 'Jane Smith', role: 'Barber', status: 'Inactive' },
    ]);

    const toggleStatus = (id) => {
        setUsers(users.map(user => 
            user.id === id ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' } : user
        ));
    };

    return (
        <div>
            
            <div className="manage-users">
                <h1>Manage Users</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>
                                    <button onClick={() => toggleStatus(user.id)}>
                                        {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;
