import React from 'react'

function RecentPickups() {
  return (
    <div className='bg-white rounded-xl p-6 shadow'>
        <h3 className='text-lg font-bold mb-4'>
            Recent Pickups
        </h3>
        <div className='overflow-x-auto'>
            <table className='w-full text-sm'>
                <thead className='text-left text-gray-500 border-b'>
                    <tr>
                        <th className='pb-2'>Date</th>
                        <th>Status</th>
                        <th>Waste Type</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b'>
                        <td className='py-3'>12 Jan 2026</td>
                        <td className='text-green-600 font-semibold'>
                            Completed
                        </td>
                        <td>Plastic</td>
                    </tr>
                    <tr>
                       <td className='py-3'>10 Jan 2026</td>
                       <td className='text-orange-500 font-semibold'>
                        Pending
                        </td> 
                        <td>Organic</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default RecentPickups