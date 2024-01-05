import Image from "next/image";
import React from "react";
import { Professional } from "../../../public/Professionale";

// LandingPageOne or Header of the Landing Page as per Figma File
const Header = () => {
  return (
    <>
      <div aria-label="Global" className="Parent fixed w-full z-10 top-0 flex flex-col justify-center items-center bg-white  shadow-md ">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-[62px] px-4 py-2 bg- white justify-between items-center flex">
          <div className="w-full flex items-center gap-12">
            <div className="flex items-center">
              <div className="block">
                <img
                  src={Professional}
                  width={24}
                  height={42}
                  alt="Professionalé"
                />
              </div>
              <div className="pl-[36px] text-blue-600 text-[19px] font-semibold font-['Proxima Nova']">
                Professionalé
              </div>
            </div>
          </div>
          <div className="flex items-center flex-row gap-4">
            <div className="w-6 h-6 px-[3px]  mr-[4px]  py-[6.75px] flex-col justify-center items-start inline-flex">
              <div className="w-6 h-6relative cursor-pointer">
                <img
                  src="assets/menu-outline.svg"
                  width={32}
                  height={24}
                  alt="Menu Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
