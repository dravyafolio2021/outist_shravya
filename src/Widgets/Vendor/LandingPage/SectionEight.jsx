import Image from "next/image";
import React from "react";

const SectionEight = () => {
  return (
    <>
      <div className="w-[393px] h-auto px-4 p-2.5 bg-white flex-col justify-start items-start gap-2.5 inline-flex">
        <div className=" w-full pb-8">
          {/* </div> */}
          <div className="w-[360px]">
            <span className="text-gray-600 text-xl font-semibold font-['Noto Sans']">
              Crafted with love and profound respect for the{" "}
            </span>
            <span className="text-blue-600 text-xl font-semibold font-['Noto Sans']">
              great outdoors and the incredible local communities
            </span>
            <span className="text-gray-600 text-xl font-semibold font-['Noto Sans']">
              {" "}
              <br />
              that make our journeys safe and unforgettable!
            </span>
          </div>
          <div className="w-[221.23px] text-gray-600 text-base font-normal font-['Noto Sans']">
            Proudly affiliated with
          </div>
          <div className="w-[418px] h-16 justify-start items-start gap-2 inline-flex">
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full">
                <Image src="/image01.png" width={64} height={64} />
              </div>
            </div>
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full">
                <Image src="/image02.png" width={64} height={64} />
              </div>
            </div>
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full">
                <Image src="/image03.png" width={64} height={64} />
              </div>
            </div>
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full">
                <Image src="/image04.png" width={64} height={64} />
              </div>
            </div>
            <div className="w-16 h-16 relative">
              <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-100 rounded-full">
                <Image src="/image05.png" width={64} height={64} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionEight;
