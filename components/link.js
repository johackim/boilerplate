import NextLink from 'next/link';

const Link = ({ href, children, title, className, active }) => (
    <NextLink href={href}>
        <a className={`${active ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'} hover:text-gray-900 dark:hover:text-white ${className}`} title={title}>
            {children}
        </a>
    </NextLink>
);

Link.defaultProps = {
    href: '/',
    children: 'Link',
    title: '',
    className: '',
    active: false,
};

export default Link;
