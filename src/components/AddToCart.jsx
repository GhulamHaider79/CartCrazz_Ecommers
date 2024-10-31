import React, {useState} from 'react'
import { FaCheck } from "react-icons/fa";



function AddToCart({product}) {
    const {id, colors, stock} = product;
    const [activeColor, setActiveColor] = useState(colors[0]);
   const opacity = 1
    
    const handleColorClick = (color) => {
        
        setActiveColor(color);
      };
  return (
    <div>
        <p className='flex gap-2 items-center'>
            Colors:
            {colors.map( (color, index) => {
             return   <button 
                             key={index} 
                             style={{ backgroundColor: color, opacity: color === activeColor ? 0.9 : 1 }}
                             className={` rounded-full flex justify-center w-4 h-4 opacity-${opacity} `}
                             onClick={() => handleColorClick(color)}>
                             {color === activeColor ? <FaCheck className='text-blue-600  w-3  ' /> : null}
                        </button>
                         
            })}
        </p>
    </div>
  )
}

export default AddToCart