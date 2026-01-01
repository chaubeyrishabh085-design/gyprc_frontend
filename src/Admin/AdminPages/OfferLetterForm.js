import React, { useState, useRef } from "react";
import axios from "axios";
import { Download, Save } from "lucide-react";
import html2pdf from "html2pdf.js";
import OfferLetterTemplate from "./offerlettertemplate";

const initialFormData = {
  name: "",
  addressLine1: "",
  addressLine2: "",
  addressLine3: "",
  designation: "",
  annualStipend: "",
  date: "",
};

export default function LetterGenerator() {
  const [formData, setFormData] = useState(initialFormData);
  const previewRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  /* ================= SAVE (A4 PDF) ================= */
  const handleSave = async () => {
    try {
      if (!previewRef.current) return;

      const pdfBlob = await html2pdf()
        .from(previewRef.current)
        .set({
          margin: 0,
          html2canvas: {
            scale: 2,
            useCORS: true,
          },
          jsPDF: {
            format: "a4",
            orientation: "portrait",
          },
        })
        .outputPdf("blob");

      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("address_line1", formData.addressLine1);
      payload.append("address_line2", formData.addressLine2);
      payload.append("address_line3", formData.addressLine3);
      payload.append("designation", formData.designation);
      payload.append("annual_stipend", formData.annualStipend);
      payload.append("date", formData.date);
      payload.append("letter_type", "offer");
      payload.append(
        "file",
        pdfBlob,
        `offer-letter-${formData.name || "template"}.pdf`
      );

      const token = localStorage.getItem("adminAuth");

      await axios.post(
        `${process.env.REACT_APP_BASEURL}/api/v1/generated-letters/`,
        payload,
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Letter saved successfully!");
    } catch (err) {
      console.error(err);
      alert("Error saving letter");
    }
  };

  /* ================= DOWNLOAD (A4 PDF) ================= */
  const handleDownload = () => {
    if (!previewRef.current) return;

    html2pdf().from(previewRef.current).set({
  margin: [0, 0, 0, 0],   // 🔥 force no margin
  html2canvas: {
    scale: 2,
    useCORS: true,
    scrollY: 0,          // 🔥 important
  },
  jsPDF: {
    unit: "mm",
    format: [210, 297],  // 🔥 exact A4
    orientation: "portrait",
  },
})

      .save();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* ================= LEFT FORM ================= */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Letter Details</h2>

          {Object.keys(formData).map((key) => (
  <div key={key} className="mb-4">
    <label className="block mb-1 text-sm font-semibold text-gray-700">
      {key.replace(/([A-Z])/g, " $1").toUpperCase()}
    </label>

    <input
      value={formData[key]}
      onChange={(e) => handleInputChange(key, e.target.value)}
      className="w-full px-4 py-2 border rounded"
    />
  </div>
))}


          <div className="flex gap-4 mt-4">
            <button
              onClick={handleSave}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded"
            >
              <Save size={18} /> Save
            </button>

            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded"
            >
              <Download size={18} /> Download
            </button>
          </div>
        </div>

        {/* ================= RIGHT PREVIEW ================= */}
        <div className="bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold p-6 border-b">Preview</h2>

          <div
            style={{
              width: "100%",
              height: "calc(100vh - 160px)",
              overflow: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
              background: "#f3f4f6",
            }}
          >
            <div
              ref={previewRef}
            >
              {/* ✅ STEP 1 APPLIED HERE */}
              <OfferLetterTemplate data={formData} preview />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
