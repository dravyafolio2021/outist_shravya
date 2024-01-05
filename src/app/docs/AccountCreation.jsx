import { CompanyDetails, MobileNumber, OTPVerification,  VenodrType } from "@/Components";
import React from "react";

const AccountCreation = () => {
  return (
    <>
      <div>
        <VenodrType />
        <CompanyDetails />
        <MobileNumber />
        <OTPVerification />
      </div>
    </>
  );
};

export default AccountCreation;
