import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewLetters = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const navigate = useNavigate();

  const companies = [
    { name: 'GYPRC', logo: '/images/gyprc logo.png' },
    { name: 'teachercool', logo: '/images/teachercool.svg' },
    { name: 'Equipmedy', logo: '/images/EQUIPMEDYLogo.png' },
  ];

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
  };

  const handleLetterClick = (letterType) => {
    navigate(`/admin/new-letters/${selectedCompany.name.toLowerCase()}/${letterType}`);
  };

  const handleBack = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">New Letters</h1>
      {!selectedCompany ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
              onClick={() => handleCompanyClick(company)}
            >
              <img src={company.logo} alt={`${company.name} logo`} className="w-16 h-16 mx-auto mb-2" />
              <h2 className="text-center text-lg font-semibold">{company.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={handleBack} className="mb-4 px-4 py-2 bg-gray-500 text-white rounded">Back</button>
          <h2 className="text-xl font-semibold mb-4">Select Letter Type for {selectedCompany.name}</h2>
          <div className="flex gap-4">
            <button onClick={() => handleLetterClick('offer')} className="px-4 py-2 bg-blue-500 text-white rounded">Offer Letter</button>
            <button onClick={() => handleLetterClick('relieving')} className="px-4 py-2 bg-green-500 text-white rounded">Relieving Letter</button>
            <button onClick={() => handleLetterClick('experience')} className="px-4 py-2 bg-red-500 text-white rounded">Experience Letter</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewLetters;