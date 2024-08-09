import {Meta, StoryObj} from "@storybook/react";
import Props from "./Text.props";
import Text from "./";

const actionsData = {};

const meta: Meta<Props> = {
    component: Text,
    args: {...actionsData}
}

export default meta;

type Story = StoryObj<Props>;

export const DisplayLarge: Story = {
    args: {
        type: 'display',
        variant: 'large',
        children: 'text?',
    },
}

export const DisplayMedium: Story = {
    args: {
        type: 'display',
        variant: "large",
        children: 'text?',
    },
}

export const DisplaySmall: Story = {
    args: {
        type: "display",
        variant: "small",
        children: "text?"
    }
};
