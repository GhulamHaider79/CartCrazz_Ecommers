import React from 'react'
import { NavLink } from 'react-router-dom';

function Error() {
  return (
    <div className='w-full h-96 flex justify-center items-center bg-slate-100'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <p className='text-6xl font-bold tracking-wide font-mono'>404</p>
            <p className='font-mono text-2xl'>UH OH you're lost.</p>
            <NavLink to={'/'}  className=' bg-green-200 w-20 px-4 py-2 rounded-md font-bold tracking-wide hover:bg-green-400 transition duration-300 ' >
                Home
            </NavLink>
        </div>
    </div>
  )
}

export default Error