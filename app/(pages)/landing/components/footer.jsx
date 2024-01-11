"use client";
import Image from "next/image";
import React from "react";
import { MdFacebook, MdMessage, MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-[100%] h-auto md:h-[90vh] flex flex-col justify-between items-center p-[20px]">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-start self-center relative pt-10">
        <div className="relative w-[200px] h-[100px] p-0 m-0"></div>
        <Image
          src={"/Image/whitelogo.png"}
          alt="Logo"
          width={700}
          height={300}
          className="w-[200px] absolute -top-[30px] -left-[50px]"
        />
        <div className="">
          <h2 className="text-brown pb-4 text-[15px] font-medium">COMPANY</h2>
          <ul className="flex flex-col gap-[20px]">
            <li className="text-[14px] cursor-pointer hover:text-brown">
              About
            </li>
            <li className="text-[14px] cursor-pointer hover:text-brown">Jobs</li>
            <li className="text-[14px] cursor-pointer hover:text-brown">
              For the Records
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-brown pb-4 text-[15px] font-medium">COMMUNITIES</h2>
          <ul className="flex flex-col gap-[20px]">
            <li className="text-[14px] cursor-pointer hover:text-brown">
              For Artists
            </li>
            <li className="text-[14px] cursor-pointer hover:text-brown">
              Developers
            </li>
            <li className="text-[14px] cursor-pointer hover:text-brown">
              Advertising
            </li>
            <li className="text-[14px] cursor-pointer hover:text-brown">
              Investors
            </li>
            <li className="text-[14px] cursor-pointer hover:text-brown">
              Vendors
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="text-brown pb-4 text-[15px] font-medium">USEFUL LINKS</h2>
          <ul className="flex flex-col gap-[20px]">
            <li className="text-[14px] cursor-pointer hover:text-brown">
              Support
            </li>
            <li className="text-[14px] cursor-pointer hover:text-brown">
              Web Player
            </li>
            <li className="text-[14px] cursor-pointer hover:text-brown">
              For Mobile Apps
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center gap-5">
          <span className="p-2 rounded-full cursor-pointer bg-[#030c13e8]">
            <MdFacebook className="text-white text-center hover:text-primary" size={40} />
          </span>
          <span className="p-2 rounded-full cursor-pointer bg-[#030c13e8]">
            <MdWhatsapp className="text-white text-center hover:text-primary" size={40} />
          </span>
          <span className="p-2 rounded-full cursor-pointer bg-[#030c13e8]">
            <MdMessage className="text-white text-center hover:text-primary" size={40} />
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row self-center justify-between items-center gap-10 mt-8 md:mt-0 py-8 xl:py-0">
        <p className="text-brown text-[13px] text-center">
          Terms and conditions apply. 1 month free not available for users who
          have already tried Premium.
        </p>
        <p className="text-brown text-[13px]">@ 2020 MixBeat AB.</p>
      </div>
    </div>
  );
};

export default Footer;
