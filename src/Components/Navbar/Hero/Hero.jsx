import React from 'react'



const Hero = () => {
  return (
    <section id='home' className="relative bg-cover bg-center h-screen bg-[url('./assets/RealEstate.png')] flex items-center justify-center text-center bg-blue-500">

             <div className="relative z-10 text-black p-10 bg-white rounded-t-4xl ">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-light mb-4 font-serif">Your Best <br />Real Estate Agent</h2>
            <p className="md-6">Comfort, peaceful, Shortlet, Staycation, etc all in best Agent</p>
            <br />
            <button className="cursor-pointer text-black bg-blue-400 px-6 py-4 rounded-full font-semibold hover:bg-blue-500">
            Build your Dream Home
            </button>
            <hr className="mt-8 w-30 m-auto border-t-4 border-red-600" />
        </div>

    </section>
  )
}

export default Hero
