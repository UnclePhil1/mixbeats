"use client";
import Image from "next/image";
import React from "react";

const Premium = () => {
  return (
    <div className="py-[20px] w-full bg-white flex justify-center items-center flex-col">
      <h1 className="text-[2em] font-semibold py-4 text-dark text-center">
      The power of Premium
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center">
                <Image src={"/Image/prime1.png"} alt="Premium Images" width={700} height={300} className="w-[150px]" />
                <h1 className="text-dark py-2 font-semibold">Ad-free music listening</h1>
                <p className="text-dark text-center">Enjoy uninterrupted music.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src={"/Image/prime2.png"} alt="Premium Images" width={700} height={300} className="w-[150px]" />
                <h1 className="text-dark py-2 font-semibold">Offline playback</h1>
                <p className="text-dark text-center">Save your data by listening offline.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src={"/Image/prime3.png"} alt="Premium Images" width={700} height={300} className="w-[150px]" />
                <h1 className="text-dark py-2 font-semibold">Play everywhere</h1>
                <p className="text-dark text-center">Listen on your speakers, TV, and other favorite devices.</p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <Image src={"/Image/prime4.png"} alt="Premium Images" width={700} height={300} className="w-[150px]" />
                <h1 className="text-dark py-2 font-semibold">Pay your way</h1>
                <p className="text-dark text-center">Prepay with Paytm, UPI, and more.</p>
            </div>
      </div>
    </div>
  );
};

export default Premium;
