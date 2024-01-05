import Image from "next/image";
import React from "react";

const AddInventory = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-auto p-2.5 px-4 bg-white flex-col justify-center items-start gap-[18px] inline-flex">
          <div className="text-zinc-800 text-2xl font-bold font-['Noto Sans'] leading-[30px]">
            Add Catalogue
          </div>
          <div className="w-full  justify-start items-start gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {/* First Entry */}
            <div className="self-stretch cursor-pointer hover:border hover:border-black grow shrink basis-0 p-3 bg-white rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                  <Image
                    width={24}
                    height={24}
                    className="w-[40px] h-[40px] p-2  rounded-xl"
                    src="/assets/hiking.png"
                    alt="Placeholder"
                  />
                </div>

                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="w-[261px] h-4 pr-[194px] justify-start items-center inline-flex">
                    <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                      Trekking
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Entry */}

            <div className="self-stretch  cursor-pointer hover:border hover:border-black  grow shrink basis-0 p-3 bg-white rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                  <Image
                    width={24}
                    height={24}
                    className="w-[40px] h-[40px] p-2  rounded-xl"
                    src="/assets/landscape.png"
                    alt="Placeholder"
                  />
                </div>

                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="w-[261px] h-4 pr-[137px] justify-start items-center inline-flex">
                    <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                      Mountaineering
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Entry */}
            <div className="self-stretch cursor-pointer hover:border hover:border-black  grow shrink basis-0 p-3 bg-white rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                  <Image
                    width={24}
                    height={24}
                    className="w-[40px] h-[40px] p-2  rounded-xl"
                    src="/assets/directions_bike.png"
                    alt="Placeholder"
                  />
                </div>

                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="w-[261px] h-4 pr-[165px] justify-start items-center inline-flex">
                    <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                      Bike Touring
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth Entry */}
            <div className="self-stretch cursor-pointer hover:border hover:border-black  grow shrink basis-0 p-3 bg-white rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                  <Image
                    width={24}
                    height={24}
                    className="w-[40px] h-[40px] p-2  rounded-xl"
                    src="/assets/kayaking.png"
                    alt="Placeholder"
                  />
                </div>

                <div className="flex-col justify-start items-start gap-2 inline-flex">
                  <div className="w-[261px] h-4 pr-[205px] justify-start items-center inline-flex">
                    <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                      Rafting
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddInventory;
