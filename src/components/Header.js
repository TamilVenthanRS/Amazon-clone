import React from 'react'
import Image from 'next/image'
import  {SearchIcon,
         ShoppingCartIcon,
        MenuIcon,   
        LocationMarkerIcon}  from '@heroicons/react/outline'
import { useRouter } from 'next/router'        
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

const Header = () => {

  const router= useRouter()
  const items=useSelector(selectItems)

  return (
    <div>
    <div className='flex items-center bg-amazon_blue p-2 py-3 px-6   flex-grow'>
                           {/*image*/}
        <div className='mt-2 flex item-center flex-grow sm:flex-grow-0 border border-transparent hover:border-white cursor-pointer duration-100 px-2'>
            <Image
              onClick={()=> router.push('/')}
              src='https://links.papareact.com/f90'
              height={50}
              width={150}
              objectFit='contain'
              className='cursor-pointer'
            />

        </div>
        <div className='hidden sm:flex text-white  items-center text-xs space-x-6 mx-6 whitespace-nowarp  '>

          <div className='border border-transparent hover:border-white cursor-pointer duration-100 px-2'>
          <LocationMarkerIcon className='h-6 '/>
            <p>Delever to</p>
         <p className='font-extrabold   md:text-sm'>chennai</p>
         </div>
        </div>

        <div className='hidden sm:flex item-center h-10 flex-grow bg-yellow-400 hover:bg-yellow-600 cursor-pointer ml-2'>                       
            {/*search bar*/ }
                   <input className='p-2 h-full flex-grow w-6 px-4 focus:outline-none ' type='text'/>  
                   <SearchIcon className='p-4 h-12 '/> 
        </div > 
        <div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowarp '>
            <div onClick={()=>router.push('/signin')} className='border border-transparent hover:border-white cursor-pointer duration-100 px-2'>
                <p>Hello User</p>
                <p className='font-extrabold md:text-sm'>Accounts and list</p>

            </div>
            <div className='border border-transparent hover:border-white cursor-pointer duration-100 px-2'>
                <p>Return</p>
                <p className='font-extrabold md:text-sm'>& orders</p>

            </div>
            <div onClick={()=>router.push('/checkout')} className='relative flex items-center border border-transparent hover:border-white cursor-pointer duration-100 px-2 ' >
                <span className=' absolute top-0 right-0 md:right-0 h-4 w-4 bg-yellow-400 rounded-full text-black  font-bold text-center'>{items.length}</span>
               < ShoppingCartIcon className='h-10 '/>


            </div>
        </div>  
      
                        
    </div>

    
    <div className=' flex items-center bg-amazon_blue-light text-white text-sm space-x-3 pl-6 p-2' >
            <p className='  flex item-center cursor-pointer'>
                <MenuIcon className=' h-6 mr-1'/>
                
             All </p>
            <p>Amazon MiniTv</p>
            <p>Sell</p>
            <p>Best Sellers</p>
            <p>Mobile</p>
            <p>Today's Deal</p> 
            <p>Prime</p>
            <p className='hidden md:inline'>Electronic</p>
            <p className='hidden md:inline'>Amazon Pay</p>
            <p className='hidden lg:inline'>New Releases</p>

            

    </div> 

    </div>
    

   


  )
}

export default Header