"use client";

import React from "react";
import {
  ActionFooter,
  BankDetails,
  CompanyDetails,
  MobileNumber,
  OTPVerification,
  VenodrType,
} from "@/Components";

const Account = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-between gap-24 mt-16">
        <div className="">
          <VenodrType id="Vendor" />
          <ActionFooter Back="Vendor" className="h-full" Next="Vendor2" />
        </div>
        <div className="">
          <CompanyDetails id="Vendor2" />
          <ActionFooter Back="Vendor" className="h-full" Next="Vendor2" />
        </div>
        <div className="">
          <MobileNumber />
          <ActionFooter Back="Vendor" className="h-full" Next="Vendor2" />
        </div>
        <div className="">
          <OTPVerification />
          <ActionFooter Back="Vendor" className="h-full" Next="Vendor2" />
        </div>
        <div className="">
          <BankDetails />
          <ActionFooter Back="Vendor" className="h-full" Next="Vendor2" />
        </div>
      </div>
    </>
  );
};

export default Account;
