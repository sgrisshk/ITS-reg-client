import {Meta, StoryObj} from '@storybook/react';
import Props from './TableHeader.props';
import TableHeader from '.';
import { TableHeaderUsecaseDefault, TableHeaderUsecaseFull, TableHeaderUsecaseOnlyLeft, TableHeaderUsecaseOnlyRight } from './TableHeader.usecase';

const actionsData = {};

const meta: Meta<Props> = {
    component: TableHeader,
    args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        ...TableHeaderUsecaseDefault
    },
};

export const Left: Story = {
    args: {
        ...TableHeaderUsecaseOnlyLeft
    },
};

export const Right: Story = {
    args: {
        ...TableHeaderUsecaseOnlyRight
    },
};

export const Full: Story = {
        args: {
        ...TableHeaderUsecaseFull
    },
}