"use state";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { RiRegisteredLine } from "react-icons/ri";

const SignIn = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <Link href="/landing" className="absolute top-10 left-10 z-50">
        <MdArrowBackIos size={40} className="text-white hover:text-brown" />
      </Link>
      <div className="w-screen h-screen bg-[#030c13e8] z-10 absolute top-0 left-0"></div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={"/Image/whitelogosmall.png"}
          alt="Backdrop"
          width={700}
          height={300}
          className={"w-[100px] h-[100px] z-50"}
        />
        <Image
          src={"/Image/register.png"}
          alt="Backdrop"
          width={700}
          height={300}
          className={"w-screen h-screen absolute top-0 left-0 object-cover"}
        />
        <button className="w-[300px] text-[16px] font-semibold py-2 px-4 border-2 border-white hover:text-primary shadow-md rounded-full gap-5 z-50 flex justify-center items-center hover:bg-slate-800">
          <RiRegisteredLine size={30} />
          SignUp with Spotify
        </button>
      </div>
    </div>
  );
};

export default SignIn;
