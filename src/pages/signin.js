import Image from 'next/image'
import React from 'react'

const signin = () => {
  return (
    <div className='w-full'> 
      <div className='w-full bg-gray-100 pb-10'>
        <form className='w-[350px] mx-auto flex flex-col items-center'>
            <img className='w-32 m-10' src='./img/amalogo.png' alt='logo'/>
           <div className=' w-full border border-zinc-200 p-6 m-10'>
            <h2 className=' text-3xl font-medium mb-4'>Sign In</h2>
           <div className='flex flex-col gap-3'>
            <div className='flex flex-col gap-2 mt-10 mb-10'>
                <p className=' text-sm font-medium'>Email </p>
                <input className='w-full  lowercase py-1 border border-zinc-400 px-2 text-base  rounded-sm outline-none focus-within:border-[#e77600] duration-100' type='email' required/>
            </div>
            <div className='flex flex-col gap-2 mb-10'>
                <p className=' text-sm font-medium'>Password </p>
                <input className='w-full  lowercase py-1 border border-zinc-400 px-2 text-base  rounded-sm outline-none focus-within:border-[#e77600] duration-100' type='password' required/>
            </div>


            <button className="w-full ру-30 h-10 text-sm font-normal rounded-sm
            bg-gradient-to-t  from-[#f7dfa5] to-[#f0c14b] hover:bg-gradient-to-b border border-zinc-400 active:border-yellow-800 active:shadow-mazonIngut">Sign In</button>
            </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default signin
