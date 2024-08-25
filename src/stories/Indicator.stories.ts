import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Indicator } from './Indicator';

const meta = {
    title: 'Example/Indicator',
    component: Indicator,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {
                type: 'select',
                options: ['warning', 'normal']
            }
        },
        label: { control: 'text' },
        onClick: { action: 'clicked' },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {
        variant: 'normal',
        label: 'Запущен',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        label: 'Отключён',
    },
};

export const Clickable: Story = {
    args: {
        variant: 'normal',
        label: 'Clickable Indicator',
        onClick: () => alert('Indicator clicked!'),
    },
};
