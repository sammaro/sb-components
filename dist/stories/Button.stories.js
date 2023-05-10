import { Button } from './Button';
// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
var meta = {
    title: 'Example/Button',
    component: Button,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export default meta;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export var Primary = {
    // More on args: https://storybook.js.org/docs/react/writing-stories/args
    args: {
        primary: true,
        label: 'Button',
    },
};
export var Secondary = {
    args: {
        label: 'Button',
    },
};
export var Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};
export var Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
