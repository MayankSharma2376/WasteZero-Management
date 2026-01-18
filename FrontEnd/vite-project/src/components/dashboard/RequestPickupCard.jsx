import React from 'react'

function RequestPickupCard() {
  return (
    <div className='bg-green-700 text-white rounded-xl p-6 flex flex-col justify-between'>
        <div>
            <h3 className='text-xl font-bold mb-1'>
                Request Waste Pickup
            </h3>
            <p className='text-green-100 text-sm'>
                Schedule a pickup from your location
            </p>
        </div>

        <button className='mt-4 bg-white text-green-700 px-4 py-2 rounded-md font-semibold w-fit hover:bg-green-100'>
            Request Now
        </button>
    </div>
  )
}

export default RequestPickupCard