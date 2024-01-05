import React from "react";

const HeadingOneDynamic = ({Content}) => {
  return (
    <>
      <div className="max-w-full w-[420px] text-zinc-800 text-[40px] font-bold font-['Noto Sans'] leading-[44px]">
        {Content}
      </div>
    </>
  );
};

export default HeadingOneDynamic;
