import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ExperienceLetterForm = () => {
  const { company } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeName: '',
    position: '',
    joiningDate: '',
    relievingDate: '',
    responsibilities: '',
  });
  const [generatedLetter, setGeneratedLetter] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate the letter
    const letter = `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ccc; max-width: 600px; margin: auto;">
        <h1 style="text-align: center;">Experience Letter</h1>
        <p>This is to certify that ${formData.employeeName} worked with ${company} as ${formData.position} from ${formData.joiningDate} to ${formData.relievingDate}.</p>
        ${formData.responsibilities ? `<p>During their tenure, they were responsible for: ${formData.responsibilities}</p>` : ''}
        <p>We wish them success in their future endeavors.</p>
        <p>Best regards,<br>${company} HR Team</p>
      </div>
    `;
    setGeneratedLetter(letter);
  };

  const handleBack = () => {
    setGeneratedLetter(null);
  };

  if (generatedLetter) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Experience Letter</h1>
        <div dangerouslySetInnerHTML={{ __html: generatedLetter }} />
        <button onClick={handleBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">Back to Form</button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Experience Letter Form for {company}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Employee Name</label>
          <input
            type="text"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Position</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Relieving Date</label>
          <input
            type="date"
            name="relievingDate"
            value={formData.relievingDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Responsibilities</label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">Generate Experience Letter</button>
      </form>
    </div>
  );
};

export default ExperienceLetterForm;