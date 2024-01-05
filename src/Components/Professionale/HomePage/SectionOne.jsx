import React from "react";

const SectionOne = () => {
  return (
    <>
      <div className="Parent bg-[#f9f9f9]">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px] h-[152px] px-4 py-[27px] bg-stone-50 flex-col justify-start items-start gap-2.5 inline-flex">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="flex-col justify-start items-start gap-2 flex">
              <div className="w-[361px] text-zinc-800 text-xl font-bold font-['Noto Sans'] leading-relaxed">
                Welcome to The Outist <br />
                Professionalé
              </div>
            </div>
            <div className="w-[361px] text-zinc-600 text-sm font-light font-['Noto Sans']">
              India’s best free and open platform for outdoor experiential
              travel and learning.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
