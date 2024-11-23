import React, { useEffect, useState } from 'react';
import { fetchUsers, addUser , updateUser , deleteUser  } from '../api';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUser , setNewUser ] = useState({ name: '', role: '', status: 'Active' });

    useEffect(() => {
        const loadUsers = async () => {
            const data = await fetchUsers();
            setUsers(data);
        };
        loadUsers();
    }, []);

    const handleAddUser  = async () => {
        const addedUser  = await addUser (newUser );
        setUsers([...users, addedUser ]);
        setNewUser ({ name: '', role: '', status: 'Active' });
    };

    const handleDeleteUser  = async (id) => {
        await deleteUser (id);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h2>User Management</h2>
            <input
                type="text"
                placeholder="Name"
                value={newUser .name}
                onChange={(e) => setNewUser ({ ...newUser , name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Role"
                value={newUser .role}
                onChange={(e) => setNewUser ({ ...newUser , role: e.target.value })}
            />
            <button onClick={handleAddUser }>Add User</button>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.role} - {user.status}
                        <button onClick={() => handleDeleteUser (user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;