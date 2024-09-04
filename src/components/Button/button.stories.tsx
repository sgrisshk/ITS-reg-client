import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Удалить',
    color: 'filled',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Мои Боты',
    color: 'bordered',
};
