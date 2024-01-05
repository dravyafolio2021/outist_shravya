import Heading from './Heading'; // Update the path to your Heading component

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    text: { control: 'text' },
    level: { control: { type: 'select', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] } },
    textAlign: { control: 'select', options: ['left', 'center', 'right'] },
    textColor: { control: 'color' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    fontFamily: { control: 'text' },
    letterSpacing: { control: 'text' },
    lineHeight: { control: 'text' },
    margin: { control: 'text' },
    padding: { control: 'text' },
    className: { control: 'text' },
  },
};

const Template = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
    primary: true,
  text: 'Default Heading',
  level: 'h2',
  // Add other default props as needed
};

export const Heading1 = Template.bind({});
Heading1.args = {
  text: 'Heading Level 1',
  level: 'h1',
  // Add specific props for h1 as needed
};

export const Heading2 = Template.bind({});
Heading2.args = {
  text: 'Heading Level 2',
  level: 'h2',
  // Add specific props for h2 as needed
};

export const Heading3 = Template.bind({});
Heading3.args = {
  text: 'Heading Level 3',
  level: 'h3',
  // Add specific props for h3 as needed
};

export const Heading4 = Template.bind({});
Heading4.args = {
  text: 'Heading Level 4',
  level: 'h4',
  // Add specific props for h4 as needed
};

export const Heading5 = Template.bind({});
Heading5.args = {
  text: 'Heading Level 5',
  level: 'h5',
  // Add specific props for h5 as needed
};

export const Heading6 = Template.bind({});
Heading6.args = {
  text: 'Heading Level 6',
  level: 'h6',
  // Add specific props for h6 as needed
};

export const Body1 = Template.bind({});
Body1.args = {
  text: 'BodyText 1',
  level: 'p',
  // Add specific props for h6 as needed
};
