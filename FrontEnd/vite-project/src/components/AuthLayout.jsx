import React from 'react'

function AuthLayout({children, illustartion, reverse=false}) {
  return (
    <div>
        <div className='min-h-screen bg-green-100 flex'>
            <div className={`hidden lg:flex w-1/2 items-center justify-center px-12 ${reverse ? "order-1" : "order-2"} `}>
            {illustartion}
            </div>

            <div className='w-full lg:w-1/2 flex items-center justify-center px-4'>
            {children}
            </div>
        </div>
    </div>
  )
}

export default AuthLayout