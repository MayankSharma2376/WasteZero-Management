import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className='w-full bg-slate-900 text-white'>
            <div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
                <h1 className='text-2xl font-bold text-green-400'>
                    WasteZero
                </h1>

                <ul className='hidden md:flex gap-6 text-sm'>
                    <li className='hover:text green-400 cursor-pointer'>Home</li>
                    <li className='hover:text green-400 cursor-pointer'>Features</li>
                    <li className='hover:text green-400 cursor-pointer'>How It Works</li>
                    <li className='hover:text green-400 cursor-pointer'>Contact</li>

                </ul>
                <div className='hidden md:flex gap-3'>
                    <button className='px-4 py-2 text-sm border border-green-400 rounded hover:bg-green-400 hover:text-black'>
                        Login
                    </button>
                    <button className='px-4 py-4 text-sm bg-green-400 text-black rounded hover:bg-green-500'>
                       Register
                    </button>
                </div>
                <div className='md:hidden text-2xl cursor-pointer'>
                    <i class="fa-solid fa-list"></i>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar