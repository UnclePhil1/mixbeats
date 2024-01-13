"use client";
import Image from "next/image";
import React from "react";

const Premium = () => {
  return (
    <div className="p-[20px] w-full bg-white flex justify-center items-center flex-col h-auto lg:h-[90vh]">
      <h1 className="text-[2.5em] font-bold py-4 text-dark text-center mb-5">
      The Power of Premium
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center">
                <Image src={"/Image/prime1.png"} alt="Premium Images" width={700} height={300} className="w-[150px]" />
                <h1 className="text-dark py-2 font-bold text-[1.2em]">Ad-free Music Listening</h1>
                <p className="text-dark text-center text-[15px] font-medium">Enjoy uninterrupted music.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src={"/Image/prime2.png"} alt="Premium Images" width={700} height={300} className="w-[150px]" />
                <h1 className="text-dark py-2 font-bold text-[1.2em]">Offline Playback</h1>
                <p className="text-dark text-center text-[15px] font-medium">Save your data by listening offline.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src={"/Image/prime3.png"} alt="Premium Images" width={700} height={300} className="w-[150px]" />
                <h1 className="text-dark py-2 font-bold text-[1.2em]">Play Everywhere</h1>
                <p className="text-dark text-center text-[15px] font-medium">Listen on your speakers, TV, and other favorite devices.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src={"/Image/prime4.png"} alt="Premium Images" width={700} height={300} className="w-[150px]" />
                <h1 className="text-dark py-2 font-bold text-[1.2em]">Pay Your Way</h1>
                <p className="text-dark text-center text-[15px] font-medium">Prepay with Paytm, UPI, and more.</p>
            </div>
      </div>
    </div>
  );
};

export default Premium;
