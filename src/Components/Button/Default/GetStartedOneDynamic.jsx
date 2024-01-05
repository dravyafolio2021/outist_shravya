import React from "react";

const GetStartedOneDynamic = ({Content="I am a GetStartedOneDynamic "}) => {
  return (
    <>
      <button className="w-auto h-12 justify-start items-center gap-6 inline-flex">
        
        <div className="p-3 bg-blue-700 rounded-2xl border-2 border-blue-700 justify-center items-center flex">
          <div className="px-4 justify-center items-center flex">
            <div className="text-white text-base font-bold font-['Noto Sans'] leading-normal tracking-wide">
              {Content}{" "}
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default GetStartedOneDynamic;
