import {Meta, StoryObj} from '@storybook/react';
import Props from './PopoverTile.props';
import PopoverTile from '.';
import {DefaultUsecase} from './PopoverTile.usecase';

const actionsData = {};

const meta: Meta<Props> = {
  component: PopoverTile,
  args: {...actionsData},
};

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
  args: {...DefaultUsecase},
};
