import React, { useEffect, useState } from 'react';
import { fetchRoles, addRole, updateRole, deleteRole } from '../api';

const RoleManagement = () => {
    const [roles, setRoles] = useState([]);
    const [newRole, setNewRole] = useState({ name: '', permissions: [] });

    useEffect(() => {
        const loadRoles = async () => {
            const data = await fetchRoles();
            setRoles(data);
        };
        loadRoles();
    }, []);

    const handleAddRole = async () => {
        const addedRole = await addRole(newRole);
        setRoles([...roles, addedRole]);
        setNewRole({ name: '', permissions: [] });
    };

    const handleDeleteRole = async (id) => {
        await deleteRole(id);
        setRoles(roles.filter(role => role.id !== id));
    };

    return (
        <div>
            <h2>Role Management</h2>
            <input
                type="text"
                placeholder="Role Name"
                value={newRole.name}
                onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Permissions (comma separated)"
                value={newRole.permissions.join(', ')}
                onChange={(e) => setNewRole({ ...newRole, permissions: e.target.value.split(',').map(p => p.trim()) })}
            />
            <button onClick={handleAddRole}>Add Role</button>
            <ul>
                {roles.map(role => (
                    <li key={role.id}>
                        {role.name} - Permissions: {role.permissions.join(', ')}
                        <button onClick={() => handleDeleteRole(role.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RoleManagement;