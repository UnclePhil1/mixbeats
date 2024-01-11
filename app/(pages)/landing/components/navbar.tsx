'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'

const Navbar = () => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

  return (
    <div className='w-full flex flex-col md:flex-row justify-between items-center py-2 px-4 relative'>
        <div className='relative w-[200px] h-[100px] p-0 m-0'>
        </div>
        <Image src={'/Image/whitelogo.png'} alt='Music Web Player Logo' width={700} height={300} className='w-[200px] h-[200px] absolute md:left-0 -top-[50px] -left-[50px]'/>
        <nav>
            <ul className={`${show ? 'block' : 'hidden md:flex'} flex  flex-col md:flex-row justify-center items-center gap-10 md:gap-5`}>
                <li>
                    <Link href={'/notfound'} className='hover:text-gray'>Premium</Link>
                </li>
                <li>
                    <Link href={'/notfound'} className='hover:text-gray'>Support</Link>
                </li>
                <li>
                    <Link href={'/notfound'} className='hover:text-gray'>Download</Link>
                </li>
                <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-5'>
                    <Link href={'/signup'} className='hover:text-primary'>Sign Up</Link>
                    <Link href={'/login'} className='bg-primary hover:bg-white hover:text-primary py-2 px-4 rounded-md'>Log In</Link>
                </div>
            </ul>
            <button onClick={toggleShow}><MdMenu size={30} className="text-white absolute top-10 right-10 block md:hidden"/></button>
        </nav>
    </div>
  )
}

export default Navbar