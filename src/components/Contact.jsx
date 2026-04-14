// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState(''); // Success/Error message ke liye

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const json = await response.json();

      if (json.success) {
        setStatus('Message sent successfully! 🎉');
        form.reset(); // Form clear kar do
      } else {
        setStatus('Error sending message. Please try again.');
      }
    } catch (error) {
      setStatus('Something went wrong. Please try again later.');
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 sm:py-24 md:py-28 lg:py-32"
      style={{ backgroundColor: '#121212' }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 md:mb-10 text-white">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#E96600] to-[#ff8c3a] mx-auto rounded-full mb-6 md:mb-10"></div>

        <p className="text-center text-gray-300 text-lg md:text-xl mb-10 md:mb-14 max-w-3xl mx-auto">
          Cultivating Connections: Reach Out And Connect With Me
        </p>

        {/* Form */}
        <form 
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto flex flex-col space-y-5 sm:space-y-6"
        >
          {/* Hidden access key */}
          <input 
            type="hidden" 
            name="access_key" 
            value="237ed171-2870-4bb7-827b-86f7866706eb"  // <-- Yahan apna Web3Forms access key paste kar do
          />

          {/* Optional hidden fields for better email */}
          <input type="hidden" name="from_name" value="Portfolio Contact Form" />
          <input type="hidden" name="subject" value="New Message from Portfolio" />

          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-4 sm:p-5 border border-zinc-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-[#E96600] focus:ring-2 focus:ring-[#E96600]/30 transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-4 sm:p-5 border border-zinc-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-[#E96600] focus:ring-2 focus:ring-[#E96600]/30 transition-all duration-300"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            required
            className="p-4 sm:p-5 border border-zinc-700 rounded-lg bg-[#1a1a1a] text-white placeholder-gray-500 focus:outline-none focus:border-[#E96600] focus:ring-2 focus:ring-[#E96600]/30 transition-all duration-300 resize-y"
          ></textarea>

          {/* Success / Error Message */}
          {status && (
            <p className={`text-center font-medium ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
              {status}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 sm:mt-6 px-10 py-4 sm:py-5 bg-[#E96600] text-black font-bold text-lg rounded-lg hover:bg-[#d55c00] hover:text-white transition-all duration-300 shadow-lg shadow-[#E96600]/30 hover:shadow-[#E96600]/50 transform hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;