import { useState, useRef } from 'react';
import { Download, Save } from 'lucide-react';
import axios from 'axios';
import html2pdf from 'html2pdf.js';
import OfferLetterTemplate from './offerlettertemplate';

const imageURLs = {
  header: 'https://res.cloudinary.com/dzjgoqfxm/image/upload/v1767267874/header_nyq0qc.png',
  logo: 'https://res.cloudinary.com/dzjgoqfxm/image/upload/v1767267875/width_464_ef3ixf.webp',
  background: 'https://res.cloudinary.com/dzjgoqfxm/image/upload/v1767267874/background_image_klkybg.png',
  stamp: 'https://res.cloudinary.com/dzjgoqfxm/image/upload/v1767267875/stamp_n1jjky.webp',
};

const convertImageToBase64 = async (url) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error('Error converting image to base64:', error);
    return url;
  }
};

const initialFormData = {
  name: '',
  addressLine1: '',
  addressLine2: '',
  addressLine3: '',
  designation: '',
  annualStipend: '',
  date: '',
};

export default function LetterGenerator() {
  const [formData, setFormData] = useState(initialFormData);
  const [backgroundImage, setBackgroundImage] = useState(imageURLs.background);
  const [headerImage, setHeaderImage] = useState(imageURLs.header);
  const [logoImage, setLogoImage] = useState(imageURLs.logo);
  const [stampImage, setStampImage] = useState(imageURLs.stamp);
  const previewRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('adminAuth');
      await axios.post(`${process.env.REACT_APP_BASEURL}/api/v1/generated-letters/`, {
        ...formData,
        letter_type: 'offer'
      }, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'application/json'
        }
      });
      alert('Letter data saved successfully!');
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error('Error saving letter:', error);
      alert('Error saving letter. Please try again.');
    }
  };

  const handleDownload = async () => {
    if (!previewRef.current) return;

    // Convert images to base64
    const [headerBase64, logoBase64, backgroundBase64, stampBase64] = await Promise.all([
      convertImageToBase64(imageURLs.header),
      convertImageToBase64(imageURLs.logo),
      convertImageToBase64(imageURLs.background),
      convertImageToBase64(imageURLs.stamp),
    ]);

    setHeaderImage(headerBase64);
    setLogoImage(logoBase64);
    setBackgroundImage(backgroundBase64);
    setStampImage(stampBase64);

    // Wait a bit for the images to update
    setTimeout(() => {
      const element = previewRef.current;
      html2pdf()
        .set({
          filename: `offer-letter-${formData.name || 'template'}.pdf`,
          margin: [0, 0, 0, 0],
          image: { type: 'jpeg', quality: 0.98 },
          html2canvas: { 
            scale: 2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#ffffff'
          },
          jsPDF: { 
            unit: 'mm',
            format: [210, 297], // A4 dimensions
            orientation: 'portrait',
            compress: true
          },
        })
        .from(element)
        .save();

      // Reset to original URLs
      setHeaderImage(imageURLs.header);
      setLogoImage(imageURLs.logo);
      setBackgroundImage(imageURLs.background);
      setStampImage(imageURLs.stamp);

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1800px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Offer Letter Generator</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* FORM */}
          <div className="bg-white p-6 rounded-lg shadow">
            {Object.keys(initialFormData).map(key => (
              <div key={key} className="mb-4">
                <label className="block text-sm font-medium mb-1">
                  {key}
                </label>
                <input
                  type="text"
                  value={formData[key]}
                  onChange={e => handleInputChange(key, e.target.value)}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
            ))}

            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="flex-1 bg-green-600 text-white py-2 rounded flex justify-center gap-2"
              >
                <Save size={18} /> Save
              </button>

              <button
                onClick={handleDownload}
                className="flex-1 bg-blue-600 text-white py-2 rounded flex justify-center gap-2"
              >
                <Download size={18} /> Download
              </button>
            </div>
          </div>

          {/* PREVIEW */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <div
              ref={previewRef}
              className="overflow-auto bg-gray-100 p-4"
              style={{ maxHeight: '85vh' }}
            >
              <div style={{ transform: 'scale(0.65)', transformOrigin: 'top left', width: '153%' }}>
                <OfferLetterTemplate 
                  data={formData} 
                  backgroundImage={backgroundImage} 
                  headerImage={headerImage} 
                  logoImage={logoImage} 
                  stampImage={stampImage} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
