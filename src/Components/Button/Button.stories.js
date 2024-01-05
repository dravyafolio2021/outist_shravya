import React from "react";
import { Meta, Story } from "@storybook/react";
import ButtonWidget from "./Button"; // Update the path to your ButtonWidget component

export default {
  title: "Components/ButtonWidget",
  component: ButtonWidget,
  argTypes: {
    ButtonAlign: {
      control: "inline-radio",
      options: ["left", "center", "right"],
    },
    text: { control: "text", defaultValue: "Button" },
    link: { control: "text", defaultValue: "#" },
    target: { control: "text", defaultValue: "_self" },
    backgroundColor: { control: "color", defaultValue: "#007bff" },
    textColor: { control: "color", defaultValue: "#ffffff" },
    fontSize: { control: "number", defaultValue: "16px" },
    fontWeight: {
      control: "select",
      options: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    },
    fontFamily: { control: "text", defaultValue: "Arial, sans-serif" },
    letterSpacing: { control: "number", defaultValue: "normal" },
    lineHeight: { control: "text", defaultValue: "1.5" },
    borderRadius: { control: "number", defaultValue: "4px" },
    paddingVertical: { control: "text", defaultValue: "12px" },
    paddingHorizontal: { control: "text", defaultValue: "24px" },
    margin: { control: "text", defaultValue: "0" },
    borderStyle: { control: "text", defaultValue: "none" },
    borderWidth: { control: "number", defaultValue: "0" },
    boxShadow: { control: "text", defaultValue: "none" },
    className: { control: "text", defaultValue: "" },
  },
};

const Template = (args) => <ButtonWidget {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true,
  text: "Button",
  link: "#",
  target: "_self",
  backgroundColor: "#007bff",
  textColor: "#ffffff",
  fontSize: "16px",
  fontWeight: "normal",
  fontFamily: "Arial, sans-serif",
  letterSpacing: "normal",
  lineHeight: "1.5",
  borderRadius: "4px",
  paddingVertical: "12px",
  paddingHorizontal: "24px",
  margin: "0",
  borderStyle: "none",
  borderWidth: "0",
  boxShadow: "none",
  className: "",
};

export const ButtonOne = Template.bind({});
ButtonOne.args = {
  text: "Button one ",
  //   level: "h1",
  // Add specific props for h1 as needed
};

export const ButtonTwo = Template.bind({});
ButtonTwo.args = {
  text: "Button one ",
  //   level: "h1",
  // Add specific props for h1 as needed
};

export const ButtonThree = Template.bind({});
ButtonThree.args = {
  text: "Button one ",
  //   level: "h1",
  // Add specific props for h1 as needed
};

export const ButtonFour = Template.bind({});
ButtonFour.args = {
  text: "Button one ",
  //   level: "h1",
  // Add specific props for h1 as needed
};

export const ButtonFive = Template.bind({});
ButtonFive.args = {
  text: "Button one ",
  //   level: "h1",
  // Add specific props for h1 as needed
};
