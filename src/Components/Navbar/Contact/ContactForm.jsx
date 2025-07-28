import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Clear the form inputs
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Hide submission after a few secs
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section  id='contact' className="bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-400"> Contact Us </h2>
        <p className="text-center text-gray-600 mb-6"> Have a question or need help? Reach out to us anytime! </p>


        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="block text-gray-700 font-medium mb-1"> Full Name </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
              required
            />

          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required/>
            
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full border border-gray-300 px-4 py-3 h-32 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-400 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {submitted && (
          <div className="mt-6 text-green-600 font-semibold text-center animate-bounce">
            ✅ Message sent successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
