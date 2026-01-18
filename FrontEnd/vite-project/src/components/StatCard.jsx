import React from 'react'

function StatsCard({title, value, subtitle, icon, color}) {
  return (
    <div className='bg-white p-6 rounded-xl shadow flex items-center gap-4'>
        <div className={`text-3xl ${color}`}>{icon}</div>
        <div>
            <p className='text-sm text-gray-500'>{title}</p>
            <p className='text-2xl font-bold'>{value}</p>
            {subtitle && (
                <p className='text-xs text-gray-400'>{subtitle}</p>
            )}
        </div>
    </div>
  )
}

export default StatsCard