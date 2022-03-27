import Link from '@components/link';

export default {
    title: 'Components/Link',
    component: Link,
};

const Template = (args) => <Link {...args} />;

export const Default = Template.bind({});

Default.args = Link.defaultProps;
