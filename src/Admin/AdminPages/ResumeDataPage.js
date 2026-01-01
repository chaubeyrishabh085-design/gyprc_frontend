import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResumeTable from '../../components/ResumeTable';
import {toast} from 'react-toastify'
function ConsultancyUsersPage() {
    const [resumes, setResumes] = useState([]);
    const [tempUsers, setTempUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [editUserIndex, setEditUserIndex] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        resume: null
    });

    const [paginationData, setPaginationData] = useState(null)

    const getConsultancyResumes = async (consultancyId, page = 1) => {
        const url = `${process.env.REACT_APP_BASEURL}/api/v1/resumes/get_consultancy_resumes/?page=${page}`;
        const token = localStorage.getItem('token');
       
        const data = {
          consultancy_id: consultancyId,
        };
      
        try {
          const response = await axios.post(url, data, {
            headers: {
              Authorization: `Token ${token}`,
              'Content-Type': 'application/json',
            },
          });
          setPaginationData(response?.data?.data?.resumes)
          setResumes(response?.data?.data?.resumes?.results)
          setTempUsers(response?.data?.data?.resumes?.results)
        } catch (error) {
          console.error('Error fetching consultancy resumes:', error.response ? error.response.data : error.message);
        }
      };
      
    useEffect(()=>{
        const consultancyId = localStorage.getItem('userId')
        getConsultancyResumes(consultancyId)
    },[])

    const handleCreate = () => {
        setEditUserIndex(null);
        setFormData({
            name: '',
            resume: null
        });
        setIsModalOpen(true);
        const consultancyId = localStorage.getItem('userId')
        getConsultancyResumes(consultancyId)
       
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const downloadResume = (id) => {
        
    }

    const handleUserSubmit = async (data) => {
        try {
            setResumes([...resumes, data?.data]);
            setTempUsers([...tempUsers, data?.data]);
            toast.success('created successfully')
            setIsModalOpen(false);
        } catch (error) {
            console.error('Error submitting user:', error);
        }
    };

    const handleEdit = (index) => {
        setEditUserIndex(index);
        setFormData(resumes[index]);
        setIsModalOpen(true);
    };

    const deleteResume = async (id) => {
        try {
          await axios.delete(`${process.env.REACT_APP_BASEURL}/api/v1/resumes/${id}/`, {
            headers: {
              Authorization: `Token ${localStorage.getItem('token')}`,
            },
          });
    
        const consultancyId = localStorage.getItem('userId')
        getConsultancyResumes(consultancyId)
        toast.success('deleted successfully')
        } catch (error) {
          console.error('Error deleting resume:', error.response ? error.response.data : error.message);
        }
      };

    const filterResumes = (value) => {
        setSearchTerm(value);
        const filteredUsers = resumes.filter((resume) => 
            resume.name.toLowerCase().includes(value.toLowerCase()) ||
            resume.email.toLowerCase().includes(value.toLowerCase()) ||
            resume.phone.toLowerCase().includes(value.toLowerCase())
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
                    onChange={(e) => filterResumes(e.target.value)}
                    className="border w-1/3 border-gray-300  px-3 py-2 rounded-full"
                />
                <button
                  onClick={handleCreate}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Add
                </button>
            </div>
            {isModalOpen && (
                <UserFormPopup onSubmit={handleUserSubmit} onClose={handleModalClose} />
            )}

            <ResumeTable
                data={tempUsers}
                onEdit={handleEdit}
                dltResume = {deleteResume}
                downloadResume = {downloadResume}
            />
            <div className="flex justify-between mt-4 px-4">
                <div>
                    {paginationData && (
                        <p className="text-sm text-gray-700">
                            Page {paginationData.current_page} of {paginationData.total_pages} - Total {paginationData.count} results
                        </p>
                    )}
                </div>
                <div className='flex'>
                    {paginationData && (
                        <button
                            disabled={paginationData.current_page === 1}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded"
                            onClick={() => {
                                const consultancyId = localStorage.getItem('userId')
                                getConsultancyResumes(consultancyId, paginationData.current_page - 1)
                            }}
                        >
                            Previous
                        </button>
                    )}
                    {paginationData && (
                        <div className="flex space-x-2">
                            {[...Array(paginationData.total_pages - 1).keys()].map(pageNumber => (
                                pageNumber + 1 !== paginationData.current_page && (
                                    <button
                                        key={pageNumber + 1}
                                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded ${}"
                                        onClick={() => {
                                            const consultancyId = localStorage.getItem('userId')
                                            getConsultancyResumes(consultancyId, pageNumber + 1)
                                        }}
                                    >
                                        {pageNumber + 1}
                                    </button>
                                )
                            ))}
                        </div>
                    )}
                    {paginationData && paginationData.current_page < paginationData.total_pages && (
                        <button
                            disabled={paginationData.current_page === paginationData.total_pages}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded"
                            onClick={() => {
                                const consultancyId = localStorage.getItem('userId')
                                getConsultancyResumes(consultancyId, paginationData.current_page + 1)
                            }}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ConsultancyUsersPage; 

const UserFormPopup = ({ onSubmit, onClose }) => {
    const [name, setName] = useState('');
    const [resume, setResume] = useState(null);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleResumeChange = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('resume_file', resume);
        formData.append('name', name);
        const config = {
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data'
            }
        };
        axios.post(`${process.env.REACT_APP_BASEURL}/api/v1/resumes/upload_resume/`, formData, config)
            .then(response => {
                onSubmit(response.data);
            })
            .catch(error => {
                console.error('Error submitting form:', error);
            });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
                <div className="modal-card">
                    <section className="modal-card-body">
                        <form onSubmit={handleSubmit} className='space-y-4'>
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input border w-full rounded h-8" type="text" value={name} onChange={handleNameChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Resume</label>
                                <div className="control">
                                    <input className="input" type="file" accept=".pdf,.doc,.docx" onChange={handleResumeChange} />
                                </div>
                            </div>
                            <div className="flex flex-row justify-end space-x-4">
                                <div className="control">
                                    <button className="button is-link bg-green-500 rounded-md px-2 py-1 text-white">Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button bg-red-500  rounded-md px-2 py-1 text-white" onClick={onClose}>Cancel</button>
                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

