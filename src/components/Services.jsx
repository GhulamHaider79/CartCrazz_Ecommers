import React from 'react'

function Services() {
  return (
   <div className=' flex flex-wrap gap-8 justify-center mt-8  ' >
    <div className='w-[250px] h-[230px] shadow hover:shadow-lg  bg-gradient-to-r from-green-300 to-gray-400 hover:bg-gradient-to-r hover:from-gray-300 hover:to-green-400  transition duration-1000 ease-in px-4 flex flex-col gap-6 py-6 rounded-md'>
       <h1 className='font-bold'>Our Service</h1>
       <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
       <button  className=' bg-gray-200 w-[6rem] px-4 py-2 rounded-md font-bold tracking-wide hover:bg-green-400 transition duration-300 '>Explore</button>
    </div>


    <div className='w-[250px] h-[230px] hover:bg-gray-100 transition duration-500 py-8 px-4 flex flex-col gap-3 rounded-md'>
       <div className='bg-gradient-to-r from-green-300 to-gray-400 hover:bg-gradient-to-r hover:from-gray-300 hover:to-green-400  transition duration-1000 ease-in py-2 px-4 rounded-md '>
        <h6> Software Development </h6>
       </div>

       <div className='bg-gradient-to-r from-green-300 to-gray-400 hover:bg-gradient-to-r hover:from-gray-300 hover:to-green-400  transition duration-1000 ease-in py-2 px-4 rounded-md'>
        <p> Our Team Software Development </p>
       </div>

       <div>  <button  className=' bg-green-300 w-[6rem] px-4 py-2 rounded-md font-bold tracking-wide hover:bg-green-400 transition duration-300 '>Explore</button></div>
    </div>

    <div className='w-[250px] h-[230px]  bg-gradient-to-r from-green-300 to-gray-400 hover:bg-gradient-to-r hover:from-gray-300 hover:to-green-400  transition duration-1000 ease-in px-4 flex flex-col gap-6 py-6 rounded-md'>
       <h1 className='font-bold'>Our Service</h1>
       <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
       <button  className=' bg-gray-200 w-[6rem] px-4 py-2 rounded-md font-bold tracking-wide hover:bg-green-400 transition duration-300 '>Explore</button>
    </div>

   
   </div>
  )
}

export default Services