"use client";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[100%] md:h-[70vh] flex flex-col justify-between items-center py-10 px-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-start self-center relative">
      <div className='relative w-[200px] h-[100px] p-0 m-0'>
        </div>
        <Image
          src={"/Image/whitelogo.png"}
          alt="Logo"
          width={700}
          height={300}
          className="w-[200px] absolute -top-[60px] -left-[50px]"
        />
        <div className="">
          <h2 className="text-gray pb-4">COMPANY</h2>
          <ul className="flex flex-col gap-[12px]">
            <li className="text-[14px] cursor-pointer hover:text-gray">About</li>
            <li className="text-[14px] cursor-pointer hover:text-gray">Jobs</li>
            <li className="text-[14px] cursor-pointer hover:text-gray">For the Records</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-gray pb-4">COMMUNITIES</h2>
          <ul className="flex flex-col gap-[12px]">
            <li className="text-[14px] cursor-pointer hover:text-gray">For Artists</li>
            <li className="text-[14px] cursor-pointer hover:text-gray">Developers</li>
            <li className="text-[14px] cursor-pointer hover:text-gray">Advertising</li>
            <li className="text-[14px] cursor-pointer hover:text-gray">Investors</li>
            <li className="text-[14px] cursor-pointer hover:text-gray">Vendors</li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-gray pb-4">USEFUL LINKS</h2>
          <ul className="flex flex-col gap-[12px]">
            <li className="text-[14px] cursor-pointer hover:text-gray">Support</li>
            <li className="text-[14px] cursor-pointer hover:text-gray">Web Player</li>
            <li className="text-[14px] cursor-pointer hover:text-gray">For Mobile Apps</li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <span className="p-2 rounded-full bg-gray w-[40px] cursor-pointer hover:bg-slate-200">
            <Image
              src={"/Image/twitter.png"}
              alt="Logo"
              width={700}
              height={300}
              className="w-[100%] rounded-full"
            />
          </span>
          <span className="p-2 rounded-full bg-gray w-[40px] cursor-pointer hover:bg-slate-200">
            <Image
              src={"/Image/instagram.png"}
              alt="Logo"
              width={700}
              height={300}
              className="w-[100%] rounded-full"
            />
          </span>
          <span className="p-2 rounded-full bg-gray w-[40px] cursor-pointer hover:bg-slate-200">
            <Image
              src={"/Image/facebook.png"}
              alt="Logo"
              width={700}
              height={300}
              className="w-[100%] rounded-full"
            />
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row self-center justify-between items-center gap-10 mt-8 md:mt-0 py-8 xl:py-0">
        <p className="text-gray text-[13px] text-center">
          Terms and conditions apply. 1 month free not available for users who
          have already tried Premium.
        </p>
        <p className="text-gray text-[13px]">@ 2020 MixBeat AB.</p>
      </div>
    </div>
  );
};

export default Footer;
