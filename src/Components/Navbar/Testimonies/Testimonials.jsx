import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Chika Okafor',
    feedback:
      "I found my dream home on this platform! The agents were so helpful and made the process stress-free.",
    location: 'Enugu, Nigeria',
  },
  {
    id: 2,
    name: 'Tolu Adebayo',
    feedback:
      "Highly professional service. I was able to schedule a house visit and close the deal in just a few weeks.",
    location: 'Lagos, Nigeria',
  },
  
  {
    id: 3, 
    name:  'Ahmed Musa',
    feedback: "Great user interface and smooth experience. I’ve already recommended this to my friends!",
    location: 'Abuja, Nigeria',
  },
];

const Testimonials = () => {

  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-10 px-4">

        <h2 className="text-3xl font-bold">What Our Clients Say </h2>

        <p className="text-gray-600 mt-2">Real stories from satisfied homeowners</p>

      </div>

       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {testimonials.map((testimonial) => (


          <div
            key={testimonial.id}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">

            <p className="text-gray-700 italic">“{testimonial.feedback}”</p>
            <div className="mt-4">
              <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-gray-500">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
