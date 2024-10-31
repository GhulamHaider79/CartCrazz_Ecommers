import React from 'react'
import { FaStar,  FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

function Stars({stars, reviews}) {
  const ratingStare =  Array.from({length:5}, (element, index) => {
  const number = index + 0.5
     return <span key={index} className='flex'>
          {
             stars >= index +1 ? <FaStar className='text-yellow-400' /> 
            : stars >= number ? <FaStarHalfAlt className='text-yellow-400' /> 
            : <AiOutlineStar className='text-yellow-400' />
          }
     </span>


    })
  return (
    <div className='flex flex-col gap-2'>
       <p className='flex'>
       {
        ratingStare
       }
       </p>
       <p>{reviews} Customer reviews</p>
       
    </div>
  )
}

export default Stars