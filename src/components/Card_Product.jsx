import React from 'react'
import Card from './Card'
import { useContextProducts } from '../context/ProductsContext'


function Card_Product() {
    // getting 2 methord from context
    const { isLoading, featureProducts } = useContextProducts();
    // set if loading i will show loading
    if (isLoading) {
        return <div> Loading.... </div>
    }
    return (
        <div className='flex flex-col items-center mt-20 mb-6 sm:mt-6  bg-slate-200 p-6'>
            <h1 className='text-4xl font-bold'>Featured Products</h1>
            <div className='flex flex-wrap gap-6 justify-center  '>
                {featureProducts.map((product) => {
                    return <Card key={product.id} product={product} />
                })
                }
            </div>
        </div>
    )
}

export default Card_Product