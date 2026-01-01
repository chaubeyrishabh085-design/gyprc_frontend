import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Letters = () => {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLetters();
  }, []);

  const fetchLetters = async () => {
    try {
      const token = localStorage.getItem('adminAuth');
      const response = await axios.get(`${process.env.REACT_APP_BASEURL}/api/v1/generated-letters/`, {
        headers: {
          'Authorization': `Token ${token}`
        }
      });
      setLetters(response.data);
    } catch (error) {
      console.error('Error fetching letters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = (letter) => {
    if (letter.file) {
      window.open(`${process.env.REACT_APP_BASEURL}${letter.file}`, '_blank');
    } else {
      alert('File not available for download');
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Generated Letters</h1>
      {letters.length === 0 ? (
        <p>No letters created yet.</p>
      ) : (
        <div className="grid gap-4">
          {letters.map((letter) => (
            <div key={letter.id} className="bg-white p-4 rounded shadow">
              <h3 className="font-semibold">{letter.letter_type} - {letter.name}</h3>
              <p>Designation: {letter.designation}</p>
              <p>Date: {letter.date}</p>
              <p>Created: {new Date(letter.created_at).toLocaleDateString()}</p>
              <button
                onClick={() => handleDownload(letter)}
                className="mt-2 bg-blue-600 text-white px-4 py-2 rounded"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Letters;