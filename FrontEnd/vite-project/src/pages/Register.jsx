import React from 'react'

function Register() {
  return (
    <div>
        <div className='min-h-screen flex items-center justify-center bg-gray-100 px-4'>
            <div className='w-full max-w-md bg-white p-6 rounded-xl shadow'>
                <h2 className='text-2xl font-bold text-center mb-6'>Register</h2>
                <form action="" className='spac-y-4'>
                    <input type="text" name='name' placeholder='Full Name' className='w-full p-3 border rounded' />
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register