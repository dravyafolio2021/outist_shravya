import Image from "next/image";
import React from "react";

const NewInventory = () => {
  return (
    <>
      <div className="w-[393px]  h-[798px] relative bg-white">
        <div className="w-[380px] px-4 top-[165px] absolute flex-col justify-start items-start gap-4 inline-flex">
          {/* Block 1 */}
          <div className="self-stretch grow shrink basis-0 p-3 bg-white rounded-xl border border-neutral-200 flex-row justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="flex flex-col justify-center items-center w-10 h-10 bg-zinc-100 rounded-xl">
                <Image width={24} height={24} src="hiking.svg" />
              </div>
              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[261px] h-4 pr-[194px] justify-start items-center inline-flex">
                  <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                    Trekking
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5 h-5 relative origin-top-left rotate-180 flex-col justify-start items-start inline-flex" >
            <Image width={24} height={24} src="chevron.svg" />

            </div>
          </div>
          {/* Block 2 */}
          <div className="self-stretch grow shrink basis-0 p-3 bg-white rounded-xl border border-neutral-200 flex-row justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="flex flex-col justify-center items-center w-10 h-10 bg-zinc-100 rounded-xl">
                <Image width={24} height={24} src="landscape.svg" />
              </div>

              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[261px] h-4 pr-[137px] justify-start items-center inline-flex">
                  <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5 h-5 relative origin-top-left rotate-180 flex-col justify-start items-start inline-flex" />
          </div>
          {/* Block 3 */}
          <div className="self-stretch grow shrink basis-0 p-3 bg-white rounded-xl border border-neutral-200 flex-row justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className=" flex flex-col justify-center items-center w-10 h-10 bg-zinc-100 rounded-xl">
                <Image width={24} height={24} src="directions.svg" />
              </div>

              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[261px] h-4 pr-[165px] justify-start items-center inline-flex">
                  <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                    Bike Touring
                  </div>
                </div>
              </div>
            </div>
            <div className="w-5 h-5 relative origin-top-left rotate-180 flex-col justify-start items-start inline-flex" />
          </div>
          {/* Block 4 */}
          <div className="self-stretch grow shrink basis-0 p-3 bg-white rounded-xl border border-neutral-200 flex-row justify-start items-start gap-2.5 flex">
            <div className="justify-start items-center gap-3 inline-flex">
              <div className="flex flex-col justify-center items-center w-10 h-10 bg-zinc-100 rounded-xl">
                <Image width={24} height={24} src="kayaking.svg" />
              </div>

              <div className="flex-col justify-start items-start gap-2 inline-flex">
                <div className="w-[261px] h-4 pr-[205px] justify-start items-center inline-flex">
                  <div className="text-zinc-800 text-base font-medium font-['Noto Sans'] leading-none">
                    Rafting
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="w-5 h-5 relative origin-top-left rotate-180 flex-col justify-start items-start inline-flex"></div> */}
          </div>
        </div>

        {/* <div className="w-[393px] pl-4 pr-2.5 py-2 left-0 top-[103px] absolute justify-start items-center gap-2.5 inline-flex">
          <div className="text-zinc-800 text-2xl font-bold font-['Noto Sans'] leading-[30px]">
            Add Catalogue
          </div>
        </div> */}
        <button className="hover:scale-105 transition duration-150 px-6 py-4 left-[125px] top-[728px] absolute bg-white rounded-2xl border border-zinc-800 justify-end items-center gap-4 inline-flex">
          <div className="text-center text-zinc-800 text-sm font-bold font-['Noto Sans'] leading-[18px]">
            Add Category
          </div>
        </button>
      </div>
    </>
  );
};

export default NewInventory;
