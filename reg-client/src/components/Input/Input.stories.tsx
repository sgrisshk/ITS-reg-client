import {Meta, StoryObj} from "@storybook/react";
import InputGroup from "@/components/Input/index";
import Props from "./Input.props";
//import ImportedDefaultUseCaseFromFile from './NameOfCcomponent.usecase.tsx'

const meta: Meta<Props> = {
    component: InputGroup,
}

export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {
    args: {
        // здесь все props из Props принимают свои значения
        label: 'Напоминание';
        large?: true;   
        textfield?: false;
        
        
    },
}

//export const NameOfStoryInStoryBook: Story = {
//    args: {
        // здесь все props из Props принимают свои значения
//        ...ImportedUseCaseFromFile
//    },
//}
