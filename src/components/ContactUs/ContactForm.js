// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     contactNumber: "",
//     companyName: "",
//     services: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     // First Name validation
//     if (!formData.firstName.trim()) {
//       newErrors.firstName = "First Name is required.";
//     }

//     // Last Name validation
//     if (!formData.lastName.trim()) {
//       newErrors.lastName = "Last Name is required.";
//     }

//     // Email validation
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email address is invalid.";
//     }

//     // Contact Number validation
//     if (!formData.contactNumber.trim()) {
//       newErrors.contactNumber = "Contact Number is required.";
//     } else if (!/^\d{10}$/.test(formData.contactNumber)) {
//       newErrors.contactNumber = "Contact number must be exactly 10 digits.";
//     }

//     // Services validation
//     if (!formData.services.trim()) {
//       newErrors.services = "Please select a service.";
//     }

//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formErrors = validateForm();
//     if (Object.keys(formErrors).length > 0) {
//       setErrors(formErrors);
//     } else {
//       setErrors({});
//       // Handle form submission here
//       console.log(formData);
//       // You can also proceed with the form submission here if needed
//       e.target.submit();
//     }
//   };

//   return (
//     <>
//       <form className="fms" action="https://api.web3forms.com/submit" method="POST" onSubmit={handleSubmit}>
//         <input type="hidden" name="apikey" value="9282368f-3135-4ac2-a189-1d48c6a9c40b" />

//         <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
//           <div className="mb-2">
//             <label htmlFor="firstName" className="block text-white font-medium text-base">First Name *</label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none placeholder-white"
//             />
//             {errors.firstName && (
//               <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
//             )}
//           </div>
//           <div className="mb-2">
//             <label htmlFor="lastName" className="block text-white font-medium text-base">Last Name *</label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
//             />
//             {errors.lastName && (
//               <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
//             )}
//           </div>
//           <div className="mb-2">
//             <label htmlFor="email" className="block text-white font-medium text-base">Email *</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">{errors.email}</p>
//             )}
//           </div>
//           <div className="mb-2">
//             <label htmlFor="contactNumber" className="block text-white font-medium text-base">Contact Number *</label>
//             <input
//               type="tel"
//               id="contactNumber"
//               name="contactNumber"
//               value={formData.contactNumber}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
//             />
//             {errors.contactNumber && (
//               <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>
//             )}
//           </div>
//           <div className="mb-2">
//             <label htmlFor="services" className="block text-white font-medium text-base">Services Looking for *</label>
//             <select
//               id="services"
//               name="services"
//               value={formData.services}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 text-white bg-black bg-opacity-5 rounded-md focus:outline-none"
//             >
//               <option className="bg-black text-white" value="TeacherCool">Consulting Service</option>
//             </select>
//             {errors.services && (
//               <p className="text-red-500 text-xs mt-1">{errors.services}</p>
//             )}
//           </div>


//           <div className="mb-2">
//             <label htmlFor="services" className="block text-white font-medium text-base">Company*</label>
//             <select
//               id="companyName"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 text-white bg-black bg-opacity-5 rounded-md focus:outline-none"
//             >
//               <option className="bg-black text-white" value="TeacherCool">GYPRC consulting</option>
//             </select>
//             {/* {errors.services && (
//               <p className="text-red-500 text-xs mt-1">{errors.services}</p>
//             )} */}
//           </div>

//           {/* <div className="mb-2">
//             <label htmlFor="companyName" className="block text-white font-medium text-base">Company</label>
//             <input
//               type="text"
//               id="companyName"
//               name="companyName"
//               value={formData.companyName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
//             />
//           </div> */}

          

//              <div className="mb-2">
//          <label htmlFor="companyName" className="block text-white font-medium text-base">Company</label>
//          <div className="">

//             <input
//               type="checkbox"
//               id="companyName"
//               name="tatName}"
//               value={formData.statName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
//             />
//            <div>
//            <label>By opting in for text messages, you agree to receive messages from VOIPOFFICE at the number provided. Message frequency varies.Msg & data rates may apply.</label>
//            <p>View our Privacy Plicy for more information</p>
//            </div>
//          </div>
//           </div>
//         </div>

        
//         <div className="mb-2">
//           <label htmlFor="message" className="block text-white font-medium text-base">Message</label>
//           <textarea
//             name="message"
//             id="message"
//             value={formData.message}
//             onChange={handleChange}
//             cols="30"
//             rows="3"
//             className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
//           ></textarea>
//         </div>
//         <input type="hidden" name="from_name" value="Notification from Gyprc Web" />
//         <input type="hidden" name="redirect" value="https://gyprc.com/thanks" />

//         <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400">Submit</button>
//       </form>
//     </>
//   );
// };

// export default ContactForm;




import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    companyName: "",
    services: "",
    message: "",
    consent: false, // For checkbox
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Handle checkbox separately
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required.";
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }

    // Contact Number validation
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required.";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Contact number must be exactly 10 digits.";
    }

    // // Services validation
    // if (!formData.services.trim()) {
    //   newErrors.services = "Please select a service.";
    // }

    //  // Services validation
    //  if (!formData.companyName.trim()) {
    //   newErrors.services = "Please select a Company Name.";
    // }

    // Checkbox validation
    if (!formData.consent) {
      newErrors.consent = "You must agree to the terms to proceed.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      console.log(formData); // Submit form data here
      e.target.submit();
    }
  };

  return (
    <>
      <form
        className="fms"
        action="https://api.web3forms.com/submit"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="apikey"
          value="9282368f-3135-4ac2-a189-1d48c6a9c40b"
        />

        <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
          {/* First Name */}
          <div className="mb-2">
            <label htmlFor="firstName" className="block text-white font-medium text-base">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-white font-medium text-base">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-2">
            <label htmlFor="email" className="block text-white font-medium text-base">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Contact Number */}
          <div className="mb-2">
            <label htmlFor="contactNumber" className="block text-white font-medium text-base">
              Contact Number *
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.contactNumber}</p>
            )}
          </div>

    

          {/* Services */}
          <div className="mb-2">
            <label htmlFor="services" className="block text-white font-medium text-base">
              Services Looking for *
            </label>
            <select
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 text-white bg-black bg-opacity-5 rounded-md focus:outline-none"
            >
              <option value="Consulting">Consulting Service</option>
            
            </select>
            {errors.services && (
              <p className="text-red-500 text-xs mt-1">{errors.services}</p>
            )}
          </div>

             {/* Services */}
             <div className="mb-2">
            <label htmlFor="services" className="block text-white font-medium text-base">
              Company *
            </label>
            <select
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 text-white bg-black bg-opacity-5 rounded-md focus:outline-none"
            >
              <option value="Consulting">GYPRC consulting</option>
          
            </select>
            {errors.companyName && (
              <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
            )}
          </div>
      
        </div>

                     {/* Message */}
                     <div className="mb-2">
          <label htmlFor="message" className="block text-white font-medium text-base">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            cols="30"
            rows="3"
            className="w-full px-4 py-2 border border-gray-300 bg-black bg-opacity-5 text-white rounded-md focus:outline-none"
          ></textarea>
        </div>

            {/* Checkbox */}
            <div className="mb-2">
            <label htmlFor="consent" className="block text-white font-medium text-base">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mr-2 "
              />
              By opting in for text messages, you agree to receive messages from GYPR consulting LLC, Inc at the number provided. Message frequency varies. Msg & data rates may apply. Reply STOP to unsubscribe.Reply HELP for help.View our <NavLink to="/privacy-policy"> Privacy Policy</NavLink> for more information.
              <br/> View our <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="">Privacy policy gypr consulting </a> for more information.

            </label>
            {errors.consent && (
              <p className="text-red-500 text-xs mt-1">{errors.consent}</p>
            )}
           
          </div>

    

        <input type="hidden" name="from_name" value="Notification from Gyprc Web" />
        <input type="hidden" name="redirect" value="https://gyprc.com/thanks" />

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-400"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
