import React from 'react'

function Footer() {
  return (
    <div>
        <footer className='bg-slate-900 text-gray-400 py-10'>
            <div className='max-w-7xl mx-auto px-4 text-center'>
                <h3 className='text-xl font-bold text-green-400 mb-2'>
                    WasteZero
                </h3>
                <p className='text-sm mb-4'>
                    Smart Waste Pickup & Recycling Platform
                </p>
                <p className='text-xs'>
                  &copy; {new Date().getFullYear()} WasteZero. All rights reserved.
                </p>
            </div>
        </footer>
    </div>
  )
}

export default Footer