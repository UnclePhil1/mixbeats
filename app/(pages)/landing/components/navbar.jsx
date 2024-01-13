"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowRight, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center py-2 px-[10%] relative">
      <Image
        src={"/Image/whitelogosmall.png"}
        alt="Music Web Player Logo"
        width={700}
        height={300}
        className="w-[70px] h-[70px] float-left mr-[70%] md:mr-0"
      />
      <nav className="flex justify-center">
        <ul
          className={`${
            show ? "block" : "hidden md:flex"
          } flex  flex-col md:flex-row justify-center items-center gap-10 md:gap-5`}
        >
          <li>
            <Link href={"/notfound"} className="hover:text-brown font-semibold">
              Premium
            </Link>
          </li>
          <li>
            <Link href={"/notfound"} className="hover:text-brown font-semibold">
              Support
            </Link>
          </li>
          <li>
            <Link
              href={"/notfound"}
              className="hover:text-brown font-semibold pr-[20px]"
            >
              Download
            </Link>
          </li>
          <li>
            <span className="p-[1px] h-full bg-white"></span>
          </li>
          <div className="flex flex-col md:flex-row justify-center items-center px-6 cursor-pointer">
            <Link href={"/signin"} className="font-semibold flex justify-center items-center py-2 px-4 rounded-full border-slate-800 hover:bg-slate-800 border">
              Sign Up
              <MdArrowRight
                size={30}
                className="text-white"
              />
            </Link>
          </div>
        </ul>
        <button onClick={toggleShow}>
          <MdMenu
            size={30}
            className="text-white absolute top-10 right-10 block md:hidden"
          />
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
