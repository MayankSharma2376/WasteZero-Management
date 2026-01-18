import React from 'react'

function StatCard({title, value, icon}) {
  return (
    <div className='bg-white rounded-xl p-5 shadow flex items-center gap-4'>
        <div className='text-3xl text-green-700'>{icon}</div>
        <div>
            <p className='text-gray-500 text-sm'>{title}</p>
            <p className='text-xl font-bold'>{value}</p>
        </div>
    </div>
  )
}

export default StatCard