import Image from "next/image";
import React from "react";
import {
  air,
  mountain,
  stadium,
  waves,
} from "../../../../public/Professionale";

const Offerings = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] mt-16 lg:max-w-[768px] xl:max-w-[1240px]   px-4 py-2.5 bg-white flex-col justify-center items-start gap-2.5 inline-flex">
          <div className="w-full h-[42px] pb-1.5 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch h-5 pr-[38px] justify-start items-center inline-flex">
              <div className="text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-tight">
                Which experiences do you offer?
              </div>
            </div>
            <div className="text-zinc-600 text-xs font-normal font-['Noto Sans'] leading-3">
              Select all experiences that you provides
            </div>
          </div>

          {/* Land Experience Over */}
          <div className="w-full h-auto px -4 py-5 bg-white  justify-center items-start gap-2.5  flex flex-col">
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                  <Image width={40} height={40} src={air} className="p-3" />
                </div>
                <div className="w-[71px] h-4 pr-[31px] justify-start items-center flex">
                  <div className="text-zinc-600 text-base font-bold font-['Noto Sans'] leading-none">
                    Land
                  </div>
                </div>
              </div>

              <div className=" w-full justify-start items-start gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105   pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/bicycleTour.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Hiking-1.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Hiking.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/ice climbing.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/motorbike tours.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Skeiing.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/snowboarding.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/wildlife safaris.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                {/* Land Experience Over */}

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Water Experience Over */}
          <div className="w-full h-auto px -4 py-5 bg-white  justify-center items-start gap-2.5  flex flex-col">
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                  <Image width={40} height={40} src={waves} className="p-3" />
                </div>
                <div className="w-[71px] h-4 pr-[31px] justify-start items-center flex">
                  <div className="text-zinc-600 text-base font-bold font-['Noto Sans'] leading-none">
                    Water
                  </div>
                </div>
              </div>

              <div className=" w-full justify-start items-start gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105   pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/bicycleTour.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Hiking-1.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Hiking.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/ice climbing.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/motorbike tours.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Skeiing.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/snowboarding.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/wildlife safaris.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                {/* Land Experience Over */}

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Land Experience Over */}
          <div className="w-full h-auto px -4 py-5 bg-white  justify-center items-start gap-2.5  flex flex-col">
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                  <Image
                    width={40}
                    height={40}
                    src={mountain}
                    className="p-3"
                  />
                </div>
                <div className="w-[71px] h-4 pr-[31px] justify-start items-center flex">
                  <div className="text-zinc-600 text-base font-bold font-['Noto Sans'] leading-none">
                    Air
                  </div>
                </div>
              </div>

              <div className=" w-full justify-start items-start gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105   pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/bicycleTour.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Hiking-1.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Hiking.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/ice climbing.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/motorbike tours.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Skeiing.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/snowboarding.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/wildlife safaris.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                {/* Land Experience Over */}

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Land Experience Over */}
          <div className="w-full h-auto px -4 py-5 bg-white  justify-center items-start gap-2.5  flex flex-col">
            <div className="w-full flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                  <Image width={40} height={40} src={stadium} className="p-3" />
                </div>
                <div className="w-[71px] h-4 pr-[31px] justify-start items-center flex">
                  <div className="text-zinc-600 text-base font-bold font-['Noto Sans'] leading-none">
                    Events
                  </div>
                </div>
              </div>

              <div className=" w-full justify-start items-start gap-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6">
                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105   pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/bicycleTour.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Hiking-1.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Hiking.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/ice climbing.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/motorbike tours.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Skeiing.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/snowboarding.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/wildlife safaris.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                {/* Land Experience Over */}

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
                  </div>
                </div>

                <div className="cursor-pointer hover:bg-[#f9f9f9] hover:scale-105 pl-2 pr-3 py-2 bg-white rounded-2xl border border-neutral-200 justify-start items-center gap-2 flex">
                  <div className="w-10 h-10 bg-zinc-100 rounded-xl">
                    <Image
                      width={40}
                      height={40}
                      src="/ExperienceImage/Mountaineering.png"
                    />
                  </div>
                  <div className="text-zinc-800 text-xs font-normal font-['Noto Sans'] leading-none">
                    Mountaineering
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

export default Offerings;
