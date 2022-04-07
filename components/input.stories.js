import Input from '@components/input';

export default {
    title: 'Components/Input',
    component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = Input.defaultProps;
