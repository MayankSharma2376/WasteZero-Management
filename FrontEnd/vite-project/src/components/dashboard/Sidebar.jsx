import React from 'react'
import {FaGift, FaRecycle, FaSignOutAlt} from "react-icons/fa"

function Sidebar() {
  return (
    <div className='h-full p-6 flex flex-col gap-6'>
        <h2 className='text-xl font-bold'>WasteZero</h2>
        <nav className='flex flex-col gap-4'>
            <button className='flex items-center gap-3'>
                <FaRecycle/> Dashboard
            </button>
            <button className='flex items-center gap-3'>
                <FaGift/> Rewards
            </button>
        </nav>
        <div className='mt-auto'>
            <button className='flex items-center gap-3 text-red-200'>
                <FaSignOutAlt/> Logout
            </button>
        </div>
    </div>
  )
}

export default Sidebar