import React from "react";

const GetStartedTwoDynamic = ({
  Content = "I am a GetStartedTwoDynamic Default Text ",
}) => {
  return (
    <>
      {/* <button className="w-auto h-12 justify-start items-center gap-6 inline-flex"></button> */}
      <button className="w-[361px] h-[46px] px-4 py-[13px] bg-blue-700 rounded-2xl border border-blue-700 justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-white text-base font-bold font-['Proxima Nova'] leading-tight">
          {Content}{" "}
        </div>
      </button>
    </>
  );
};

export default GetStartedTwoDynamic;
