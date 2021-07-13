import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Input} from "../components/Input";
import {useInput} from "../library";

export default {
    title: 'Example/Input',
    component: Input,
    args: {
        type: "text",
        placeholder: "Search in Input"
    }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Initial = Template.bind({});
export const Password = Template.bind({});
Password.args = {
    type: "password"
};

const Template2: ComponentStory<typeof Input> = (args) => {
    const [value, onChange] = useInput();
    return (
        <Input {...args} value={value} onChange={onChange}/>
    )
};
export const UseInput = Template2.bind({});