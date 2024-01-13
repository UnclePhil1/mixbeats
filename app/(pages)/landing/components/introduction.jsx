'use client'
import React from 'react'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className='w-full p-4 md:p-20 bg-blue-500 flex justify-center items-start flex-col'>
        <h1 className='text-[2.3em] font-semibold py-4'>Get Premium free for 1 month</h1>
        <h2 className='text-[1.5em] font-medium'>Just ₹119/month after. Cancel anytime.</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 my-8 gap-5'>
            <button><Link href="/signup" className='py-4 px-6 rounded-full font-semibold text-white bg-dark hover:bg-gray-900 hover:text-gray hidden md:block'>Get Started</Link></button>
            <button><Link href="/notfound" className='py-4 px-6 rounded-full font-semibold text-white border-2 border-white hover:bg-[#1d75de]'>See other plans</Link></button>
        </div>
        <p className='text-[13px]'>Terms and conditions apply. 1 month free not available for users who have already tried Premium.</p>
    </div>
  )
}

export default Introduction