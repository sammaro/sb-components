import { Meta, StoryFn } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

export default {
  title: 'UI/MyLabel',
  tags: ['autodocs'],
  component: MyLabel,
  argTypes: {
    size: { control: 'select', options: ['normal', 'h1'] },
    color: { control: 'select' },
    fontColor: { control: 'color' },
  }
} as Meta<typeof MyLabel>

const Template: StoryFn<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
  label: 'My Label',
  size: 'normal',
  allCaps: false,
}

export const AllCaps = Template.bind({});
AllCaps.args = {
  size: 'normal',
  allCaps: true,
}

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'normal',
  color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  size: 'normal',
  color: 'tertiary',
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#5517ac',
};