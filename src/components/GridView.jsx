import React from 'react'
import Card from './Card'


function GridView({ products }) {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 lg:gap-4 sm:gap-4'>
                {
                    products.map((element) => {
                        return (
                           <Card key={element.id} product={element} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default GridView