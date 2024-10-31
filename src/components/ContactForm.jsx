import React from 'react'

function ContactForm() {
  return (
    

<div className='flex flex-col items-center justify-center mt-24 md:mt-8'>
    <div>
       <h3>this i frime</h3>
    </div>
        <div className='flex flex-col items-center gap-3 bg-gray-300 w-[300px] p-4 rounded-md'>
            <h2 className='text-2xl font-bold tracking-tight text-slate-500'>Contact Us</h2>
        <form className='flex flex-col  w-full gap-3' >
            <input className='px-6 py-2 rounded-sm' type="text" name="name" id="name" placeholder='Name' />
            <input className='px-6 py-2 rounded-sm' type="email" name='email' placeholder='Email' />
            <textarea className='px-6 py-2 rounded-sm' name="text-aera" id="text-aera"></textarea>
        </form>
        </div>
    </div>
    
  )
}

export default ContactForm