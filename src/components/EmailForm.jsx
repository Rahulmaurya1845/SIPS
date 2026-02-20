// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// const EmailForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     address: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const serviceID = "service_vctqckf";      // 🔥 your service ID
//     const templateID = "template_juud5io";    // 🔥 your template ID
//     const publicKey = "RZePIUrB2xMzi6IyN";      // 🔥 your public key

//     emailjs
//       .send(serviceID, templateID, formData, publicKey)
//       .then(
//         (response) => {
//           console.log("SUCCESS!", response);
//           alert("Message Sent Successfully ✅");

//           setFormData({
//             name: "",
//             email: "",
//             mobile: "",
//             address: "",
//             message: "",
//           });
//         },
//         (error) => {
//           console.log("FAILED...", error);
//           alert("Something went wrong ❌");
//         }
//       );
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <input
//         type="text"
//         name="name"
//         placeholder="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//         className="w-full p-3 border rounded"
//       />

//       <input
//         type="email"
//         name="email"
//         placeholder="Your Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//         className="w-full p-3 border rounded"
//       />

//       <input
//         type="text"
//         name="mobile"
//         placeholder="Mobile Number"
//         value={formData.mobile}
//         onChange={handleChange}
//         required
//         className="w-full p-3 border rounded"
//       />

//       <input
//         type="text"
//         name="address"
//         placeholder="Address"
//         value={formData.address}
//         onChange={handleChange}
//         required
//         className="w-full p-3 border rounded"
//       />

//       <textarea
//         name="message"
//         placeholder="Your Message"
//         value={formData.message}
//         onChange={handleChange}
//         required
//         className="w-full p-3 border rounded"
//       />

//       <button
//         type="submit"
//         className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// };

// export default EmailForm;


import {
  Phone,
  Mail,
  MapPin,
  Share2,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
} from "lucide-react";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "YOUR_SERVICE_ID";     // 🔥 Paste your Service ID
    const templateID = "YOUR_TEMPLATE_ID";   // 🔥 Paste your Template ID
    const publicKey = "YOUR_PUBLIC_KEY";     // 🔥 Paste your Public Key

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          alert("Message Sent Successfully ✅");

          setFormData({
            name: "",
            email: "",
            mobile: "",
            address: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-gray-300 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 mb-6 drop-shadow-lg">
          Contact Us
        </h1>

        <h2 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4 drop-shadow-md">
          Need Help?
        </h2>

        <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-6 rounded-full shadow-lg"></div>

        <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100 max-w-3xl mx-auto mb-20 text-lg leading-relaxed drop-shadow-sm">
          If you have any questions or need additional information, feel free
          to reach out to us using the details below or the contact form.
        </p>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE CARDS */}
          <div className="grid sm:grid-cols-2 gap-10">

            {/* Call */}
            <div className="group bg-gray-800/80 p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 hover:text-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-blue-600 group-hover:scale-110">
                <Phone className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Call Us On</h3>
              <p className="mb-3 text-lg text-gray-200">097923 47399</p>
              <p className="text-sm opacity-80 text-gray-400">
                Monday to Saturday, 9:00 AM – 5:00 PM
              </p>
            </div>

            {/* Email */}
            <div className="group bg-gray-800/80 p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 hover:text-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-green-600 group-hover:scale-110">
                <Mail className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Email Us</h3>
              <p className="mb-3 text-lg text-gray-200">sips@gmail.com</p>
              <p className="text-sm opacity-80 text-gray-400">
                We usually respond within 24 hours.
              </p>
            </div>

            {/* Location */}
            <div className="group bg-gray-800/80 p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-600 hover:text-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-pink-100 to-pink-200 text-pink-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-pink-600 group-hover:scale-110">
                <MapPin className="text-3xl" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Our Location</h3>
              <p className="text-sm opacity-80 leading-relaxed text-gray-400">
                RXP2+45C, Parsauna, Uttar Pradesh 274309
              </p>
            </div>

            {/* Social */}
            <div className="group bg-gray-800/80 p-10 rounded-3xl shadow-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:bg-gradient-to-br hover:from-yellow-400 hover:to-yellow-500 hover:text-white flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-yellow-100 to-yellow-200 text-yellow-600 rounded-full mb-6 transition-all duration-300 group-hover:bg-white group-hover:text-yellow-600 group-hover:scale-110">
                <Share2 className="text-3xl" />
              </div>

              <div className="flex justify-center space-x-4 mt-6">
                <Facebook />
                <Instagram />
                <Youtube />
                <Twitter />
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-gray-800/80 p-12 rounded-3xl shadow-2xl border border-gray-700 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/10 to-red-100/10 rounded-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-semibold mb-10 text-white">
                Send Us a Message
              </h3>

              <form className="space-y-8" onSubmit={handleSubmit}>

                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required className="w-full p-5 border-2 border-gray-600 rounded-2xl bg-gray-700 text-white" />
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" required className="w-full p-5 border-2 border-gray-600 rounded-2xl bg-gray-700 text-white" />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter Your Mobile" required className="w-full p-5 border-2 border-gray-600 rounded-2xl bg-gray-700 text-white" />
                  <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Enter Your Address" className="w-full p-5 border-2 border-gray-600 rounded-2xl bg-gray-700 text-white" />
                </div>

                <textarea rows="6" name="message" value={formData.message} onChange={handleChange} placeholder="Enter Your Message" required className="w-full p-5 border-2 border-gray-600 rounded-2xl bg-gray-700 text-white resize-none"></textarea>

                <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-5 rounded-2xl font-semibold text-lg shadow-lg hover:scale-105 transition">
                  Submit Now →
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;