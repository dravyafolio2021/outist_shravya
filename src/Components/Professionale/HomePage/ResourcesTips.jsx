import Image from "next/image";
import React from "react";

const ResourcesTips = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-[269px] px-4 py-10 bg-white flex-col justify-center items-start gap-2.5 inline-flex">
          <div className="w-full flex-col justify-center items-start gap-2.5 flex">
            <div className="text-zinc-800 text-base font-bold font-['Noto Sans'] leading-none">
              Resources & Tips
            </div>
            <div className="text-zinc-600 text-sm font-light font-['Noto Sans']">
              To help you make the most of The Outist
            </div>
          </div>
          <div className="self-stretch grow shrink basis-0 bg-white rounded-2xl shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-center px-0 md:px-4 lg:px-4 xl:px-4 items-center gap-2 ">
            <div className="border rounded-lg p-2 w-[329px] justify-start items-center gap-3.5 inline-flex">
              <Image
                width={60}
                height={60}
                className="w-[60px] h-[60px] opacity-90 rounded-xl"
                src="/assets/ImageOne.png"
              />
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="w-56 text-zinc-800 text-sm font-semibold font-['Noto Sans']">
                  How to make your listing stand out?
                </div>
                <div className="w-[225px] text-stone-500 text-xs font-light font-['Noto Sans']">
                  Making the most of The Outist
                </div>
              </div>
            </div>
            <div className="border rounded-lg p-2 w-[329px] justify-start items-center gap-3.5 inline-flex">
              <Image
                width={60}
                height={60}
                className="w-[60px] h-[60px] opacity-90 rounded-xl"
                src="/assets/ImageTwo.png"
              />
              <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-0.5 inline-flex">
                <div className="w-56 text-zinc-800 text-sm font-semibold font-['Noto Sans']">
                  Content that makes people go 😍{" "}
                </div>
                <div className="w-[225px] text-stone-500 text-xs font-light font-['Noto Sans']">
                  Practical tips on making people hooked!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourcesTips;
