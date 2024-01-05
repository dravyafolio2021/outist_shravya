import Link from "next/link";
import React from "react";

const GetStartedCTA = () => {
  return (
    <>
      <div className="Parent bg-white h-[60px] bottom-0 ">
        <div className="w-full fixed z-10 bottom-0 h- [57px]  py-[16px] bg-white flex-col justify-center items-center gap-2.5 inline-flex">
          <Link
            href="/docs/AccountCreation"
            className="w-[361px] px-4 py-[13px] bg-blue-700 rounded-2xl border border-blue-700 flex justify-center items-center gap-2.5"
          >
            <button className="text-center text-white text-base font-bold font-proxima-nova leading-tight">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GetStartedCTA;
