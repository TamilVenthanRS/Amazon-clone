import Image from 'next/image'
import React from 'react'
import Currency from 'react-currency-formatter'
import { removeFromBasket } from '../slices/basketSlice'
import { useDispatch } from 'react-redux'


const checkproduct = ({id, title, price, description, category, image}) => {
   
   const dispatch=useDispatch()
   const removeFromCart = ()=>{
    dispatch(removeFromBasket({id}))

   }
     
  return (
    <div className=' grid grid-cols-5'>
        <Image src={image} width={200} height={200} objectFit='contain'/>

        <div className=' col-span-3 mx-5 mb-6 '>
            <p>{title}</p>

            <Currency quantity={price} currency='INR'/>
        </div>



        <div className='flex flex-col space-y-2 items-center my-auto justify-self-end'>
           <button className=' button focus:outline-none' onClick={removeFromCart}>Remove form Cart</button>

        </div>


    </div>
  )
}

export default checkproduct