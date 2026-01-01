import React from 'react';

function UserTable({ data, onEdit, onDelete }) {

    const [isOpen, setIsOpen] = React.useState(false);
    const [deleteIndex, setDeleteIndex] = React.useState(null);

    const handleClickDelete = (index) => {
        setIsOpen(true);
        setDeleteIndex(index);
    };

    const handleDeleteConfirm = () => {
        onDelete(deleteIndex);
        setIsOpen(false);
    };

    const handleDeleteCancel = () => {
        setIsOpen(false);
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Name</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Email</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Username</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Phone</th>
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Total Resume</th>
                        {
                        localStorage.getItem('user_type') === "admin_user" &&
                        <th className="py-2 px-4 border-b border-gray-200 text-left">Actions</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                            <td className="py-2 px-4 border-b border-gray-200">{user.name}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{user.username}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{user.phone}</td>
                            <td className="py-2 px-4 border-b border-gray-200">{user.total_resumes}</td>
                            {
                            localStorage.getItem('user_type') === "admin_user" &&
                                <td className="py-2 px-4 border-b border-gray-200">
                                    <button
                                        className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 h-10 w-10 rounded-full"
                                        onClick={() => onEdit(index)}
                                    >
                                        <span className="mr-1">✏️</span>
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 h-10 w-10 rounded-full"
                                        onClick={() => handleClickDelete(index)}
                                    >
                                        <span className="mr-1">🗑️</span>
                                    </button>
                                </td>
                            }

                        </tr>
                    ))}
                </tbody>
            </table>
            {isOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded p-4">
                        <h2 className="text-center text-lg font-bold">Confirm Delete</h2>
                        <p className="text-center">Are you sure you want to delete this user?</p>
                        <div className="flex justify-center mt-4">
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-2"
                                onClick={handleDeleteConfirm}
                            >
                                Yes
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400"
                                onClick={handleDeleteCancel}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default UserTable;
