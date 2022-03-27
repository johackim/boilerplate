import Button from '@components/button';

export default {
    title: 'Components/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Button',
    path: '/',
};

export const Secondary = Template.bind({});

Secondary.args = {
    secondary: true,
    children: 'Button',
    path: '/',
};
