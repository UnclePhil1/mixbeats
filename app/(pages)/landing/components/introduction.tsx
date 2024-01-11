'use client'
import React from 'react'
import Link from 'next/link'

const Introduction = () => {
  return (
    <div className='w-full p-[20px] bg-blue-500 flex justify-center items-center flex-col h-[100vh] md:h-[80vh]'>
        <h1 className='text-[2em] font-semibold py-4'>Get Premium free for 1 month</h1>
        <h2 className='text-[1em]'>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 my-8 gap-5'>
            <button><Link href="/signup" className='py-4 px-6 rounded-full text-white bg-dark hover:text-gray hidden md:block'>Get Started</Link></button>
            <button><Link href="/notfound" className='py-4 px-6 rounded-full text-white border-2 border-white hover:text-gray hover:border-gray'>See other plans</Link></button>
        </div>
        <p className='text-[13px]'>Terms and conditions apply. 1 month free not available for users who have already tried Premium.</p>
    </div>
  )
}

export default Introduction