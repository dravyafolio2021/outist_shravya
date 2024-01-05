import Image from "next/image";
import React from "react";

const BottomNavigation = () => {
  return (
    <div className="Parent bg-black pb- 4">
      <div className="w-[356px] h-[77px] justify-center items-center inline-flex">
        <div className="w-[356px] h-[77px] py-1 bg-neutral-900 rounded-[100px] shadow justify-center items-end inline-flex">
          {/* Home */}
          <div className="w-[69px] h-[69px] bg-white rounded-[100px] flex-col justify-center items-center gap-0.5 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
            </div>
            <div className="text-blue-700 text-xs font-semibold font-['Noto Sans'] leading-none">
              Home
            </div>
          </div>

          {/* Booking */}
          <div className="w-[69px] self-stretch flex-col justify-center items-center gap-0.5 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
            </div>
            <div className="text-neutral-400 text-xs font-normal font-['Noto Sans'] leading-none">
              Booking
            </div>
          </div>

          {/* Store */}
          <div className="w-[69px] self-stretch flex-col justify-center items-center gap-0.5 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
            </div>
            <div className="text-neutral-400 text-xs font-normal font-['Noto Sans'] leading-none">
              Store
            </div>
          </div>

          {/* Payment */}
          <div className="w-[69px] self-stretch flex-col justify-center items-center gap-0.5 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
            </div>
            <div className="text-neutral-400 text-xs font-normal font-['Noto Sans'] leading-none">
              Payment
            </div>
          </div>

          {/* Profile */}
          <div className="w-[69px] self-stretch flex-col justify-center items-center gap-0.5 inline-flex">
            <div className="w-6 h-6 relative">
              <div className="w-6 h-6 left-0 top-0 absolute bg-zinc-300 rounded-full" />
            </div>
            <div className="text-neutral-400 text-xs font-normal font-['Noto Sans'] leading-none">
              Profile
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
