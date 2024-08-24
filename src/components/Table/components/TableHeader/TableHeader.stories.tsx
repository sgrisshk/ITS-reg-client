import {Meta, StoryObj} from '@storybook/react';
import Props from './TableHeader.props';
import TableHeader from '.';

const actionsData = {};

const meta: Meta<Props> = {
    component: TableHeader,
    args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {},
};
