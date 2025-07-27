import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-gray-800 py-16 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl font-bold"> Stay Updated</h2>
                 <p className="mt-2 text-blue-100">

                  Subscribe to receive property alerts, updates, and news straight to your inbox.

                 </p>

        <form className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-2 rounded-md text-white-200 focus:outline-none"/>

          <button
            type="submit"
            className="bg-white text-blue-500 font-medium px-6 py-2 rounded-md hover:bg-blue-100 transition"
       >
                    Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
