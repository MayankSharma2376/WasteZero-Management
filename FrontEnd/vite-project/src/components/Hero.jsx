import React from 'react'
import Image from "../assets/Hero.jpg"

function Hero() {
  return (
    <div>
        <section className='bg-slate-950 text-white'>
            <div className='max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-10'>
                <div className='flex-1'>
                  <h1 className='text-4xl md:text-5xl font-bold leading-tight'>
                    Smart Waste Pickup & <span className='text-green-400'>Recycling Platform</span>
                  </h1>
                  

                  <p className='mt-6 text-gray-300'>
                    Schedule waste pickups, categorize recyclables, and contribute to a cleaner environment using intelligent location-based assignments.
                  </p>

                  <div className='mt-8 flex gap-4 flex-wrap'>
                    <button className='px-6 py-3 bg-green-400 text-black rounded hover:bg-green-500'>
                        Get Started
                    </button>
                    <button className='px-6 py-3 bg-green-400 text-black rounded hover:bg-green-400 hover:text-black'>
                       Schedule Pickup
                    </button>
                  </div>
                </div>

                <div className='flex-1 text-center'>
                    <div className='w-full h-64 bg-slate-800 rounded-xl flex items-center justify-center text-gray-400'>
                        <img src={Image} alt="WasteZero" className='w-full max-w-md  mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero