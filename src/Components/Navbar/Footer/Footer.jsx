import React from 'react';

const Footer = () => {

  return (

    <footer className="bg-gray-800 text-white py-10 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">

        <div>

          <h3 className="text-xl font-bold mb-2">RealEstatePro</h3>
          
          <p className="text-sm text-gray-300">
            Your trusted partner in finding the perfect home.
          </p>
        </div>


        <div>  

          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>

          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Properties</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
          </ul>

        </div>

        <div>
          <h4 className="text-lg font-semibold mb-2">Contact Info</h4>
          <p className="text-sm text-gray-300">Email: info@realestatepro.com</p>
          <p className="text-sm text-gray-300">Phone: +234 800 123 4567</p>
          <p className="text-sm text-gray-300">Address: 123 Estate Road, Abuja, Nigeria</p>
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()}  RealEstatePro. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
