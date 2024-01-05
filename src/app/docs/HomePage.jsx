import { News, ResourcesTips, SectionEight, SectionOne, SetUpAccount } from "@/Components";
import React from "react";

const HomePage = () => {
  return (
    <>
      <div className="">
        <SectionOne />
        <ResourcesTips />
        {/* Have some Layout Problem */}
        <SetUpAccount />
        <News />
        <SectionEight />
        {/* <BottomNavigation /> */}
      </div>
    </>
  );
};

export default HomePage;
