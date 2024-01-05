// this document contains the pages/components prerender for reference
import {
  AddInventory,
  BankDetails,
  CompanyDetails,
  CompanyDetailsTwo,
  Offerings,
} from "@/Components";
import AccountCreation from "./AccountCreation";

const Docs = () => {
  return (
    <>
      <div>
        <AccountCreation />
        <AddInventory />
        <BankDetails />
        <CompanyDetailsTwo />
        <Offerings />
      </div>
    </>
  );
};

export default Docs;
