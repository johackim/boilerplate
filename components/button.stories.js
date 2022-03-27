import Button from '@components/button';

export default {
    title: 'Components/Button',
    component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Button',
    path: '/',
};

export const Secondary = Template.bind({});

Secondary.args = {
    primary: false,
    label: 'Button',
    path: '/',
};
