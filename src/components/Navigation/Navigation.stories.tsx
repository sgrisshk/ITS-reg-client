import {Meta, StoryObj} from '@storybook/react';
import {Props} from './Navigation.props';
import Navigation from './';

const actionsData = {};

const meta: Meta<Props> = {
    component: Navigation,
    args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Deafult:  Story = {
    args: {},
};
