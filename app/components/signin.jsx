"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBackIos } from "react-icons/md";
import { getProviders, signIn } from "next-auth/react";

const SignIn = ({ providers }) => {
  const handleSignin = (provider) => {
    signIn(provider.id, { callbackUrl: "/dashboard" });
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen relative">
      <div className="z-50 bg-slate-500 w-[300px] h-[300px]">
        {providers &&
          Object.values(providers).map((provider) => (
            <button key={provider.id} onClick={() => handleSignin(provider)}>
              Sign in with {provider.name}
            </button>
          ))}
      </div>
      {/* <Link href="/landing" className="absolute top-10 left-10 z-50">
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
          priority={true}
        />
        <Image
          src={"/Image/register.png"}
          alt="Backdrop"
          width={700}
          height={300}
          className={"w-screen h-screen absolute top-0 left-0 object-cover"}
        />

        <button
          onClick={() => signIn(providers, { callbackUrl: "/dashboard" })}
          className="w-[300px] text-[16px] font-semibold py-2 px-4 border-2 border-white hover:text-primary shadow-md rounded-full gap-5 flex justify-center items-center hover:bg-slate-800 text-white z-50 visible"
        >
          SignIn With Spotify
        </button>
      </div> */}
    </div>
  );
};

export default SignIn;

export async function getServerSideProps() {
  try {
    const providers = await getProviders();
    return {
      props: {
        providers,
      },
    };
  } catch (error) {
    console.error("Error fetching providers:", error);
    return {
      props: {
        providers: {}, // Provide an empty object or handle the error accordingly
      },
    };
  }
}
