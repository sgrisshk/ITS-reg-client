import {Meta, StoryObj} from '@storybook/react';
import Props from './TableBody.props';
import TableBody from '.';
import { TableBodyUsecaseDefault,TableBodyUsecaseFull, TableBodyUsecaseOnlyLeft, TableBodyUsecaseOptions, TableBodyUsecaseOnlyRight } from './TableBody.usecase';

const actionsData = {};

const meta: Meta<Props> = {
    component: TableBody,
    args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        ...TableBodyUsecaseDefault
    },
};

export const Left: Story = {
    args: {
        ...TableBodyUsecaseOnlyLeft
    },
};

export const Right: Story = {
    args: {
        ...TableBodyUsecaseOnlyRight
    },
};

export const Options: Story = {
    args: {
        ...TableBodyUsecaseOptions
    },
};

export const Full: Story = {
        args: {
        ...TableBodyUsecaseFull
    },
}