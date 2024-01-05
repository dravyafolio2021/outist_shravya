import React from "react";

const Text = ({ Content, Tag }) => {
  return <div className={`${Tag}`}>{Content}</div>;
};

export default Text;
