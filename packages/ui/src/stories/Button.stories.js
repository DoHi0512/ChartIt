import { fn } from '@storybook/test';

import Button from "../button"


export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: { onClick: fn() },
};


export const xs = {
  args: {
    sizes : 'xs',
    children : "xs size",
    className : "border border-primary text-primary"
  },
};
export const sm= {
  args: {
    sizes : 'sm',
    children : "sm size",
    className : "border border-primary text-primary"
  },
};

export const md= {
  args: {
    sizes : 'md',
    children : "md size",
    className : "border border-primary text-primary"
  },
};

export const lg= {
  args: {
    sizes : 'lg',
    children : "lg size",
    className : "border border-primary text-primary"
  },
};

export const xl= {
  args: {
    sizes : 'xl',
    children : "xl size",
    className : "border border-primary text-primary"
  },
};

export const full= {
  args: {
    sizes : 'full',
    children : "full size",
    className : "border border-primary text-primary"
  },
};
export const fit= {
  args: {
    sizes : 'fit',
    children : "fit size",
    className : "border border-primary text-primary"
  },
};


