import Text from "./Text"; // Update the path to your Text component

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    Content: { control: "text" },
    Tag: {
      control: {
        type: "radio",
      },
      options: [
        "H1",
        "H2",
        "H3",
        "H4",
        "H5",
        "B1",
        "B2",
        "B3",
        "B4",
        "Button1",
        "Button2",
        "Button3",
      ],
    },
  },
};

const Template = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  Content: "Default Text Content",
  Tag: "H1",
};
