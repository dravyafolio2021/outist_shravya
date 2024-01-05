import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ActionFooter = ({ Next, Back }) => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px]  flex flex-row justify-between items-center py-4 mx-auto">
          <div className="">
            <Button
              href={Back}
              className="text-center text-[#004CDF] bg-transparent text-base font-bold font-['Noto Sans'] leading-tight"
            >
              Back
            </Button>
          </div>
          <div className="">
            <Button
              href={Next}
              className="text-center text-[#ffffff] bg-[#999999] hover:bg-[#004CE0] text-base font-bold font-['Noto Sans'] leading-tight"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionFooter;
