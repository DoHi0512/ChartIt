import Dropdown from "../dropdown";
import { useState } from "react";

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'text' },
    },
    items: {
      control: { type: 'array' }, 
    },
    className: {
      control: { type: 'text' }, 
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState(args.value || '');

  return <Dropdown className="px-2 py-1" {...args} value={value} setValue={setValue} />;
};

// 기본 스토리
export const Default = Template.bind({});
Default.args = {
  items: ['Option 1', 'Option 2', 'Option 3'],
  value: 'Option 1',
};


