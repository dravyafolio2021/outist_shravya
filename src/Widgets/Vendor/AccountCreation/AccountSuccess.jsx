import Image from "next/image";
import React from "react";

const AccountSuccess = () => {
  return (
    <>
      <div className="w-[393px] h-screen  px-4 py-2.5 bg-white flex-col justify-center items-start gap-2.5 inline-flex">
        <div className="w-[371px] h-[204px] relative">
          <div className="w-[120px] h-[120px] left-[119px] top-0 absolute">
            <div className="w-[120px] h-[120px] left-0 top-0 absolute bg- zinc-300">
                <Image src='check.svg' width={120} height={120} />
            </div>
          </div>
          <div className="w-[371px] left-0 top-[120px] absolute text-center text-zinc-800 text-xl font-normal font-['Noto Sans'] leading-7">
            Welcome to India’s best free and open platform for outdoor
            experiential travel and learning.
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSuccess;
