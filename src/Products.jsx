import React from 'react'
import FilterSection from './components/FilterSection'
import Sort  from './components/Sort'
import ProductList from './components/ProductList'
import {useFilterContext} from './context/filterContext'

function Products() {
  const {filter_products} = useFilterContext();
  
  
  return (
    <div className='flex justify-center mt-24 md:mt-4'>
      <div className='sm:w-[90%] flex justify-center gap-8'>
        <div className='w-[20%]'>
        <FilterSection />
        </div>

        {/* left col */}
        <div className='w-[80%]'>
          <div className="top">
            <Sort />
          </div>
           <ProductList />
          <div className="bottom">
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products