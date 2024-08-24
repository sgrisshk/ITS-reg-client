import {Meta, StoryObj} from '@storybook/react';
import Props from './TableBody.props';
import TableBody from '.';

const actionsData = {};

const meta: Meta<Props> = {
    component: TableBody,
    args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {

    },
};

