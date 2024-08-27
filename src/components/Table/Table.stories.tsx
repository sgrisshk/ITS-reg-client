import {Meta, StoryObj} from '@storybook/react';
import Props from './Table.props';
import Table from '.';
import { TableUsecaseWithExamples } from './Table.usecase';

const actionsData = {};

const meta: Meta<Props> = {
    component: Table,
    args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        title: 'Начать с примера:',
        params: TableUsecaseWithExamples,
    },
};
