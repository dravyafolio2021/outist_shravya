import Image from "next/image";
import React from "react";

// LandingPageOne or Header of the Landing Page as per Figma File
const LandingPageOne = () => {
  return (
    <>
      <div className="w-[393px] h-[72px] p-4 bg-white justify-between items-center inline-flex">
        <div className="justify-start items-center gap-12 flex">
          <div className="relative">
            <div className="w-[21.67px] h-10 left-0 top-0 absolute">
              <div className="w-[7.10px] h-[21.54px] left-[7.47px] top-[9.66px] absolute">
                <Image src="Professional.svg" width={24} height={42} />
              </div>
            </div>
            <div className="left-[33.67px] top-[10px] absolute text-blue-600 text-[19px] font-semibold font-['Proxima Nova']">
              Professionalé
            </div>
          </div>
        </div>
        <div className="justify-start items-center gap-4 flex">
          <div className="w-6 h-6 relative">
            <Image src="menu-outline.svg" width={24} height={24} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPageOne;
