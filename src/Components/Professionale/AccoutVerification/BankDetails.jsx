const BankDetails = () => {
  return (
    <>
      <div className="Parent">
        <div className="w-full md:max-w-[393px] lg:max-w-[768px] xl:max-w-[1240px]  h-[616px] px-4 py-2.5 bg-white flex-col justify-center items-start gap-2.5 inline-flex">
          <div className="w-full pr-2.5 py-2 justify-start items-center gap-2.5 inline-flex">
            <div className="text-zinc-800 text-2xl font-bold font-['Noto Sans'] leading-[30px]">
              Bank Details
            </div>
          </div>

          {/* input Field Starts */}
          <div className="w-full flex-col justify-start items-start gap-8 flex">
            {/* Input Field one */}
            <div className="w-full  h-[54px] rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-[52px] py-4 bg-white rounded-xl flex-col justify-center items-start flex">
                {/* Final Input Field */}
                <input
                  placeholder="Bank Name"
                  className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                    focus:outline-none focus:text-black focus:border  
                    py-4 px-3 border border-neutral-300 rounded-md
                    transition duration-300 ease-in-out 
                    hover:border-neutral-400 hover:bg-neutral-50
                    focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
            {/* Input Field Two */}
            <div className="w-full h-[54px] rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-[52px] py-4 bg-white rounded-xl flex-col justify-center items-start flex">
                <input
                  placeholder="Account Number"
                  className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                    focus:outline-none focus:text-black focus:border  
                    py-4 px-3 border border-neutral-300 rounded-md
                    transition duration-300 ease-in-out 
                    hover:border-neutral-400 hover:bg-neutral-50
                    focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
            {/* Input Field three */}
            <div className="w-full h-[54px] rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-[52px] py-4 bg-white rounded-xl flex-col justify-center items-start flex">
                <input
                  placeholder="Renter Account Number"
                  className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                    focus:outline-none focus:text-black focus:border  
                    py-4 px-3 border border-neutral-300 rounded-md
                    transition duration-300 ease-in-out 
                    hover:border-neutral-400 hover:bg-neutral-50
                    focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
            {/* Input Field four */}
            <div className="w-full h-[54px] rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-[52px] py-4 bg-white rounded-xl flex-col justify-center items-start flex">
                <input
                  placeholder="IFSC Code"
                  className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                    focus:outline-none focus:text-black focus:border  
                    py-4 px-3 border border-neutral-300 rounded-md
                    transition duration-300 ease-in-out 
                    hover:border-neutral-400 hover:bg-neutral-50
                    focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
            {/* Input Field Five */}
            <div className="w-full h-[54px] rounded-xl border border-neutral-200 flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch h-[52px] py-4 bg-white rounded-xl flex-col justify-center items-start flex">
                <input
                  placeholder="Account Holder Name"
                  className="self-stretch text-neutral-400 text-base font-normal font-['Noto Sans'] leading-tight 
                    focus:outline-none focus:text-black focus:border  
                    py-4 px-3 border border-neutral-300 rounded-md
                    transition duration-300 ease-in-out 
                    hover:border-neutral-400 hover:bg-neutral-50
                    focus:border-black focus:bg-white focus:shadow-outline focus:ring-1 focus:ring-black"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BankDetails;
