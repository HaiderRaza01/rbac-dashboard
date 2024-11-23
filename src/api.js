
const users = [
    { id: 1, name: "Alice", role: "Admin", status: "Active" },
    { id: 2, name: "Bob", role: "User ", status: "Inactive" },
];

const roles = [
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "User ", permissions: ["Read"] },
];

export const fetchUsers = () => Promise.resolve(users);
export const fetchRoles = () => Promise.resolve(roles);
export const addUser  = (user) => Promise.resolve({ ...user, id: users.length + 1 });
export const updateUser  = (user) => Promise.resolve(user);
export const deleteUser  = (id) => Promise.resolve(id);
export const addRole = (role) => Promise.resolve({ ...role, id: roles.length + 1 });
export const updateRole = (role) => Promise.resolve(role);
export const deleteRole = (id) => Promise.resolve(id);