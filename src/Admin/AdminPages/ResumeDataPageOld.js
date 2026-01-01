import React, { useState } from 'react';

function ResumeDataPage({isAdmin}) {
  const [toggleDiv, setToggleDiv] = useState(true);

  return (
    <>
        <div className="fixed top-0 left-0  h-full bg-white p-4 sm:p-6 overflow-auto z-20">
          <div className="mb-4">
            <h2 className="text-2xl sm:text-3xl mb-4 font-semibold">Resume Upload and Search</h2>

            {/* Buttons at the top */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mb-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Total User</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Total Resumes</button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">Skill Sets</button>
          
              {isAdmin ? (
             
                <label
                  htmlFor="file-upload"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 cursor-pointer"
                >
                  Upload Resume (.pdf)
                  <input
                    type="file"
                    id="file-upload"
                    accept=".pdf"
                    className="hidden"
                  />
                </label>
              ) : (
              
                <label
                  htmlFor="file-upload"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 cursor-pointer"
                >
                  Total no of resumes uploaded
                </label>
              )}
            </div>

            {/* Search Resume section */}
            <div className="flex flex-col sm:flex-row items-center bg-white p-4 shadow-md rounded-lg space-y-2 sm:space-y-0 sm:space-x-4">
              {/* Keyword/Designation Input */}
              <input
                type="text"
                placeholder="Enter keyword / designation / companies"
                className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              {/* Experience Dropdown */}
              <div className="relative w-full sm:w-auto">
                <select
                  className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>Select experience</option>
                  <option>Fresher (less than 1 year)</option>
                  <option>1 year</option>
                  <option>2 years</option>
                  <option>3 years</option>
                  <option>4 years</option>
                  <option>5 years</option>
                </select>
              </div>

              {/* Location Input */}
              <input
                type="text"
                placeholder="Enter location"
                className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              {/* Search Button */}
              <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
                Search
              </button>
            </div>

            {/* Table displaying resume details */}
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse border border-gray-200">
                <thead className='bg-black'>
                  <tr>
                    <th className="border px-2 sm:px-4 py-2">Name (title in resume)</th>
                    <th className="border px-2 sm:px-4 py-2">Skills</th>
                    <th className="border px-2 sm:px-4 py-2">Uploaded by User</th>
                    <th className="border px-2 sm:px-4 py-2">Resume Title</th>
                    <th className="border px-2 sm:px-4 py-2">Download Resume</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='text-black'>
                    <td className="border px-2 sm:px-4 py-2">Raj Kumar</td>
                    <td className="border px-2 sm:px-4 py-2">Data Science</td>
                    <td className="border px-2 sm:px-4 py-2">Raj</td>
                    <td className="border px-2 sm:px-4 py-2">Resume_Raj.pdf</td>
                    <td className="border px-2 sm:px-4 py-2">
                      <a href="#" className="text-blue-500 hover:underline">Download link</a>
                    </td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>

          {/* Close button with cross icon */}
          <button
            onClick={() => setToggleDiv(false)}
            className="absolute top-0 right-0 sm:top-4 sm:right-4 text-gray-600 hover:text-gray-900 transition duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
    </>
  );
}

export default ResumeDataPage;
