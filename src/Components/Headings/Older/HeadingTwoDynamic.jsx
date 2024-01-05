import React from "react";

const HeadingTwoDynamic = ({ Content }) => {
  return (
    <>
      <div className="w-[440px] text-zinc-800 text-xl font-semibold font-['Noto Sans']">
        {Content}{" "}
      </div>
      
    </>
  );
};

export default HeadingTwoDynamic;
