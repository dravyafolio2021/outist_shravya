
// import HeadingOneDynamic from "@/Widgets/Headings/HeadingOneDynamic";

const ButtonVariant = () => {
  return (
    <>
      <div className="max-w-[1440px] w-[1240px]  p-1 md:p-4 lg:p-6 xl:p-8 border border-dashed rounded-[8px] flex flex-col justify-center items-center gap-8">
        <div className="text-xl md:text-2xl lg:text-2xl xl:text-2xl  justify-center  items-center">
          Button variants in sync with Figma Design along with the some Dynamic
          versions of the Widgets.
        </div>
        <div className="w-[1200px] flex flex-col gap-4 p-4 justify-center items-center">
          <div className="w-[1200px] p-[10px] grid Border text-white grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-2 m-0">
            <div className="w-full border border-[#5a5a5a] rounded-[8px] p-4 justify-start text-white items-center max-w-xl flex gap-4 flex-col  ">
              <div className="BorderButon ">
                Widget Name: GetStartedOne Button
              </div>
              {/* <GetStartedOne /> */}
            </div>
            <div className="w-full border border-[#5a5a5a] rounded-[8px] p-4 justify-start text-white items-center max-w-xl flex gap-4 flex-col  ">
              <div className="BorderButon ">
                Widget Name: GetStartedOneDynamic Button
              </div>
              {/* <GetStartedOneDynamic /> */}
            </div>
            <div className="w-full border border-[#5a5a5a] rounded-[8px] p-4 justify-start text-white items-center max-w-xl flex gap-4 flex-col  ">
              <div className="BorderButon ">
                Widget Name: GetStartedTwo Button
              </div>
              {/* <GetStartedTwo /> */}
            </div>
            <div className="w-full border border-[#5a5a5a] rounded-[8px] p-4 justify-start text-white items-center max-w-xl flex gap-4 flex-col  ">
              <div className="BorderButon ">
                Widget Name: GetStartedTwoDynamic Button
              </div>
              {/* <GetStartedTwoDynamic /> */}
            </div>
          </div>

          {/* Dynamic Heading without Icon Block */}
          <div className="Border w-[1200px] p-4 gap-4 justify-center flex flex-col items-center">
            <div className="text-2xl">
              <span className="">Dynamic Button with Icons</span>
            </div>
            <div className=" w-full gap-4 justify-center grid grid-cols-5 items-center">
              {/* <Button Buttontext="#shravya" />
              <Button backgroundColor="#ffffff" />
              <Button
                Buttontext="#dravya"
                bgColor="rgb(14 31 40)"
                textColor="#fff"
                fontSize="16px"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
                borderWidth="2px"
                borderColor="#2c3e50"
              />
              <Button Buttontext="#dravayfolio" />
              <Button Buttontext="#theoutist" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonVariant;
