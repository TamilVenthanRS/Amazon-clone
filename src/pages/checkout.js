import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import Checkproduct from '../components/checkproduct'
import Currency from 'react-currency-formatter'
import { useRouter } from 'next/router'





const checkout = () => {

    const router=useRouter()
    const total=useSelector(selectTotal)
    const item=useSelector(selectItems)
  return (
    <div className=' bg-gray-100'>
        <Header/>
        <main className='  max-w-screen-2xl mx-auto'>
          
              <div className='flex-grow m-5 shadow-sm'>
                      <img src='./img/banner1.jpg' height={250} width={1020} objectFit='contain'/>
              </div>
              <div className=' flex flex-col p-5 space-y-10 bg-white'>

                <h1 className=' text-3xl border-b pb-4'>{item.length===0 ? 'The Cart is empty': 'Your Cart Contain'  }</h1>

                  {item.map((item,i)=>(
                    <Checkproduct
                    key={i}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    
                           />
                           
                  ))}

              </div>


              <div className='flex flex-col p-10 shadow-md bg-white'>
                   
                   {item.length>0 && (
                        <>
                          <h2 className=' whitespace-nowrap'>
                               Total items ({item.length} items):{" "}
                               <span className=' font-bold'>
                                     <Currency quantity={total}      currency='INR'/>
                               </span>

                          </h2>

                          <button onClick={()=>router.push('/payments')} className='button mt-2 focus:outline-none'>
                                   Checkout
                          </button>
                        </>  

                   )}

              </div>
           

        </main>
    </div>
  )
}

export default checkout