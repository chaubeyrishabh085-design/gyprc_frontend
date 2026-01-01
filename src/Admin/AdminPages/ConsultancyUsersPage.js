import React, { useState, useEffect } from 'react';
import CreateUserModal from '../../components/CreateUserModal';
import UserTable from '../../components/UserTable';
import axios from 'axios';
import { toast } from 'react-toastify';

function ConsultancyUsersPage() {
    const [users, setUsers] = useState([]);
    const [tempUsers, setTempUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [editUserIndex, setEditUserIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        phone: '',
        password: '',
        confirm_password: ''
    });

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/v1/consultancy/get_all_consultancy_users/`, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`
                    }
                });
                setUsers(response.data.data);
                setTempUsers(response.data.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    const handleCreate = () => {
        setEditUserIndex(null);
        setFormData({
            name: '',
            email: '',
            username: '',
            phone: '',
            password: '',
            confirm_password: ''
        });
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleUserSubmit = async (data) => {
        try {
            if (editUserIndex !== null) {
                const response = await axios.patch(`${process.env.REACT_APP_BASEURL}/api/v1/consultancy/${users[editUserIndex].id}/update_profile/`, data, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                const updatedUsers = [...users];
                updatedUsers[editUserIndex] = response.data.data;
                
                // Update issue is there
                setUsers(updatedUsers);
                setTempUsers(updatedUsers);
                toast.success('User updated successfully')
            } else {
                const response = await axios.post(`${process.env.REACT_APP_BASEURL}/api/v1/consultancy/register/`, {
                    name: data.name,
                    email: data.email,
                    username: data.username,
                    phone: data.phone,
                    password: data.password,
                    role: "consultancy_user",
                    confirm_password: data.confirm_password
                }, {
                    headers: {
                        'Authorization': `Token ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                setUsers([...users, response.data.data]);
                setTempUsers([...tempUsers, response.data.data]);
                toast.success('User added successfully')
            }
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error submitting user:', error);
        }
    };

    const handleEdit = (index) => {
        setEditUserIndex(index);
        setFormData(users[index]);
        setIsModalOpen(true);
    };

    const handleDelete = async (index) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BASEURL}/api/v1/consultancy/${users[index].id}/remove_consultancy/`, {
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`
                }
            });
            setUsers(users.filter((_, i) => i !== index));
            setTempUsers(tempUsers.filter((_, i) => i !== index));
            toast.success('deleted successfully')
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    const filterUser = (value) => {
        setSearchTerm(value);
        const filteredUsers = users.filter((user) => 
            user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.email.toLowerCase().includes(value.toLowerCase()) ||
            user.phone.toLowerCase().includes(value.toLowerCase()) ||
            user.username.toLowerCase().includes(value.toLowerCase())
        );
        setTempUsers(filteredUsers);
    }

    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => filterUser(e.target.value)}
                    className="border w-1/3 border-gray-300 rounded px-3 py-2 rounded-full"
                />
                {
                    localStorage.getItem('user_type') === "admin_user" &&
                    <button
                    onClick={handleCreate}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Add
                    </button>
                }
            </div>
            <CreateUserModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleUserSubmit}
                formData={formData}
                setFormData={setFormData}
                userdata={formData}
            />
            <UserTable data={tempUsers} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
}

export default ConsultancyUsersPage; 