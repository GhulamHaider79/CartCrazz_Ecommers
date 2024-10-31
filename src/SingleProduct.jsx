import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextProducts } from './context/ProductsContext'
import ProductImages from './components/ProductImages'
import AddToCart from './components/AddToCart'
import CartAmountToggle from './components/CartAmountToggle '
import FormatPrice from './helpers/FormatPrice'
import Stars from './components/Stars'
import { TbReplace, TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from 'react-icons/md'

function SingleProduct() {
  const API = "https://api.pujakaitem.com/api/products"
  const [amount, setAmount] = useState(1)
  const { getSingleProduct, isSingleLoading, singleProduct } = useContextProducts();
  const { id } = useParams();



  const {
    id: aliasId,
    name,
    company,
    price,
    description,
    category,
    stock,
    reviews,
    stars,
    image,
  } = singleProduct



  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, []);

 const setDecrease = () => {
  amount > 1 ? setAmount(amount - 1) : setAmount(1)
 }

 const setIncrease = () => {
  amount < stock ? setAmount(amount + 1) : setAmount(stock)
 }



  if (isSingleLoading) {
    return <div className='w-full h-screen flex justify-center items-center'>
      <div className='text-xl'>Loading...</div>
    </div>
  }

  return (
    <div className='flex flex-col-reverse mt-56 sm:flex-row  sm:px-4 pb-8 md:mt-20  gap-4 items-center justify-center h-screen '>
      {/* images */}
      <div className='w-full sm:w-[50%] '>
        <div>
          <ProductImages image={image} />
        </div>
      </div>
      {/* content */}
      <div className='flex flex-col gap-2 w-full sm:w-[50%] p-4 '>
        <p className='text-3xl font-bold'>{name}</p>
        <Stars stars={stars} reviews={reviews}  />
        
        <p>
          MRP:
          <del>
            <FormatPrice price={price + 45000} />
          </del>
        </p>
        <p> Deal of the Day:  <FormatPrice price={price} /></p>
        <p className=''>{description}</p>
        <div className='flex flex-wrap  gap-8 mt-4'>
          <div className='flex flex-col items-center justify-center'>
            <TbTruckDelivery />
            <p className='text-xs text-center w-[5rem] '>free delivery</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <TbReplace />
            <p className='text-xs text-center w-[7rem] '>30 days replacement </p>
          </div >
          <div className='flex flex-col items-center justify-center'>
            <TbTruckDelivery />
            <p className='text-xs text-center w-[7rem]'> CartCrazz Delivered </p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <MdSecurity />
            <p className='text-xs text-center w-[6rem]'> 02 year warranty </p>
          </div>

        </div>
        
          <hr className="max-w-full w-[90%]  bg-gray-200 border border-gray-300 dark:bg-gray-700" />
        
        <div className='flex flex-col gap-4 items-start'>
          <p>Available:  <span className='font-bold'>{stock > 0 ? "In Stock" : "Not Available"}</span></p>
          <p>Brand:  <span className='font-bold'>{company}</span></p>
        </div>
        <hr className='max-w-full w-[90%] text-black border border-black' />
        {stock > 0 && <AddToCart product={singleProduct} />}
        <CartAmountToggle 
        amount = {amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
        />
      </div>
    </div>
  )
}

export default SingleProduct