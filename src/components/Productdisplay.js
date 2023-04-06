import React, { useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'
import Currency from 'react-currency-formatter'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../slices/basketSlice'

const MAX=5
const MIN=1
const Productdisplay = ({ id, title, price, description, category, image }) => {
  const dispatch= useDispatch()
  const[rating]=useState(
    Math.floor(Math.random()* (MAX-MIN+1)+MIN)
    
  )

  const addItemToBasket =() =>{
        
    const product = {id, title, price, description, category, image}

    dispatch(addToBasket(product))


}
  return (
    <div  className=' relative  flex flex-col m-5 bg-white z-30 p-10'>
      <p className=' absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
      <Image src={image} width={180} height={180} objectFit='contain'/>
      
      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
          {Array(rating)
            .fill()
            .map((_,i)=>(
               <StarIcon className='h-5 text-yellow-500 ' />))}
      </div>
      <p className=' text-xs my-2 line-clamp-2'>{description}</p>

      <div className=' mb-5'>
          <Currency quantity={price} currency="INR"/>
      </div>
      
      <button onClick={addItemToBasket} className='mt-auto focus:outline-none button'>Add to Cart</button>
    </div>
  )
}

export default Productdisplay