import React, { useState } from 'react';
import houseData from '../../../assets/assests';

const Houses = () => {
  const [selectedBedrooms, setSelectedBedrooms] = useState('All');

  const handleBedroomFilter = (e) => {
    setSelectedBedrooms(e.target.value);
  };

  const filteredHouses =
    selectedBedrooms === 'All'
      ? houseData
      : houseData.filter((house) => house.bedrooms === parseInt(selectedBedrooms));

  return (
    <section id='houses' className="py-16 px-4 bg-gradient-to-br from-gray-50 to-white">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-800"> Available Properties 🏠</h2>
        <p className="text-gray-500 mt-2 text-lg">Browse through homes available for sale and rent</p>
      </div>

      {/* Filter Dropdown */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <label className="text-base font-medium text-gray-700">Filter by Bedrooms:</label>
        <select
          value={selectedBedrooms}
          onChange={handleBedroomFilter}
          className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4 Bedrooms</option>
          <option value="5">5 Bedrooms</option>
        </select>
      </div>


      {/* Houses Grid: only 2 per row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {filteredHouses.map((house) => (
          <div
            key={house.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100"
          >
            <img
              src={house.image}
              alt={house.title}
              className="h-64 w-full object-cover"
              loading="lazy"
            />

            <div className="p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{house.title}</h3>
                <p className="text-gray-500">{house.location}</p>

                <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mt-4">
                  <p><span className="font-semibold"> 🛏️ Bedrooms:</span> {house.bedrooms}</p>
                  <p><span className="font-semibold">🛁 Baths:</span> {house.bathrooms}</p>
                  <p><span className="font-semibold">📐 Size:</span> {house.size}</p>
                </div>

                <p className="text-lg font-bold text-blue-600 mt-4">{house.price}</p>
                <p className="text-xs text-gray-500 mt-1 py-2">Agent: {house.agent}</p>
              </div>

              <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium transition duration-200">
                Contact Agent
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredHouses.length === 0 && (
        <p className="text-center text-gray-500 mt-12">No houses match your filter.</p>
      )}
    </section>
  );
};

export default Houses;

