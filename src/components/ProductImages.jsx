import React, { useState } from 'react'

function ProductImages({image=[ {url: ""}]}) {
  const [mainImage, setMainImage] = useState(image[0]);
  
  return (
    <div className='flex gap-4 justify-center items-center p-4 sm:p-0'>
      <div className='flex flex-col gap-1 '>
        {image.map((element, index) => (
          <figure  key={index} >
            <img 
            className='w-24 rounded-sm'
             src={element.url}
              alt={element.name}
              onClick={() => setMainImage(element)}
              />
          </figure>
        ))}
      </div>
      <div>
        <figure>
          <img className='w-[280px] rounded-md ' src={mainImage.url} alt={mainImage.name} />
        </figure>
      </div>
      </div>
  )
}

export default ProductImages