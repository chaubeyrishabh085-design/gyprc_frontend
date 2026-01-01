import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RelievingLetterForm = () => {
  const { company } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeName: '',
    position: '',
    lastWorkingDay: '',
    reason: '',
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
        <h1 style="text-align: center;">Relieving Letter</h1>
        <p>Dear ${formData.employeeName},</p>
        <p>This is to certify that you have been relieved from your position as ${formData.position} at ${company}.</p>
        <p>Your last working day was ${formData.lastWorkingDay}.</p>
        ${formData.reason ? `<p>Reason: ${formData.reason}</p>` : ''}
        <p>We wish you all the best for your future endeavors.</p>
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
        <h1 className="text-2xl font-bold mb-4">Relieving Letter</h1>
        <div dangerouslySetInnerHTML={{ __html: generatedLetter }} />
        <button onClick={handleBack} className="mt-4 px-4 py-2 bg-gray-500 text-white rounded">Back to Form</button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Relieving Letter Form for {company}</h1>
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
          <label className="block text-sm font-medium">Last Working Day</label>
          <input
            type="date"
            name="lastWorkingDay"
            value={formData.lastWorkingDay}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Reason for Relieving</label>
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            rows="4"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Generate Relieving Letter</button>
      </form>
    </div>
  );
};

export default RelievingLetterForm;