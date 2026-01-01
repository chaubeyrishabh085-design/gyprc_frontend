import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa6";

const dummyData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    resumeLink: "https://example.com/john-resume.pdf",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@example.com",
    phone: "987-654-3210",
    resumeLink: "https://example.com/jane-resume.pdf",
  },
  {
    id: 3,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "555-555-5555",
    resumeLink: "https://example.com/bob-resume.pdf",
  },
];

const ResumeSearch = () => {
  const [searchTerm, setSearchTerm] = useState([""]);
  const [searchResults, setSearchResults] = useState(dummyData);
  const [paginationData, setPaginationData] = useState(null);
  const [showPdfUrl, setShowPdfUrl] = useState(null);

  const fetchSearchResults = async (page = 1) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/v1/resume-search/search_resumes/?page=${page}`,
        {
          method: "POST",
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ keywords: [...searchTerm] }),
        }
      );
      const data = await response.json();
      setPaginationData(data.data);
      setSearchResults(data.data.results);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchSearchResults();
    }
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value.split(",").map((item) => item.trim()));
    fetchSearchResults();
  };

  const fetchPdf = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASEURL}/api/v1/resumes/${id}/download_resume/`,
        {
          headers: {
            Authorization: `Token ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch PDF");
      }

      const pdfBlob = await response.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.setAttribute("download", `resume-${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(pdfUrl);
    } catch (error) {
      console.error("Error downloading the PDF:", error);
      alert("Error downloading the PDF. Please try again.");
    }
  };

  const showPdf = (url) => {
    if (url) {
      setShowPdfUrl(url);
    } else {
      alert("Invalid PDF URL.");
    }
  };

  const closePdfPopup = () => {
    setShowPdfUrl(null);
  };

  return (
    <div className="space-y-10">
      <div className="search-container px-[5%] space-x-4 pt-10">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border w-1/3 border-gray-300 px-3 py-2 rounded-full"
        />
        <button
          className="search-button bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-400"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="px-[5%]">
        <table className="resume-table w-full text-left px-4">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Index</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={result.id} className="border-b border-gray-300">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{result.name}</td>
                <td className="px-4 py-2">{result.email}</td>
                <td className="px-4 py-2">{result.phone}</td>
                <td className="px-4 py-2 flex items-center space-x-2">
                  <button
                    onClick={() => fetchPdf(result.id)}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center"
                  >
                    <FaDownload className="w-5 h-5 mr-2" />
                    Download
                  </button>
                  <button
                    onClick={() => showPdf(result.resumeLink)}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  >
                    Show PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between mt-4 px-4">
          <div>
            {paginationData && (
              <p className="text-sm text-gray-700">
                Page {paginationData.current_page} of{" "}
                {paginationData.total_pages} - Total {paginationData.count}{" "}
                results
              </p>
            )}
          </div>
          <div className="flex">
            {paginationData && (
              <button
                disabled={paginationData.current_page === 1}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded"
                onClick={() => {
                  fetchSearchResults(paginationData.current_page - 1)
                }}
              >
                Previous
              </button>
            )}
            {paginationData && (
              <div className="flex space-x-2">
                {[...Array(paginationData.total_pages - 1).keys()].map(
                  (pageNumber) =>
                    pageNumber + 1 !== paginationData.current_page && (
                      <button
                        key={pageNumber + 1}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded ${}"
                        onClick={() => {
                          fetchSearchResults(pageNumber + 1)
                        }}
                      >
                        {pageNumber + 1}
                      </button>
                    )
                )}
              </div>
            )}
            {paginationData &&
              paginationData.current_page < paginationData.total_pages && (
                <button
                  disabled={
                    paginationData.current_page === paginationData.total_pages
                  }
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded"
                  onClick={() => {
                    fetchSearchResults(paginationData.current_page + 1)
                  }}
                >
                  Next
                </button>
              )}
          </div>
        </div>
        {showPdfUrl && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded shadow-lg w-3/4 h-3/4">
              <iframe
                src={showPdfUrl}
                title="PDF Viewer"
                className="w-full h-full"
              ></iframe>
              <button
                onClick={closePdfPopup}
                className="absolute top-2 right-2 bg-red-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeSearch;
