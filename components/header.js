import Link from 'next/link';

const Header = ({ title, links, description, logo, fixed = false }) => (
    <header className={`flex shadow-md inset-x-0 h-16 items-center z-20 dark:bg-gray-900 dark:text-gray-300 bg-white ${fixed && 'fixed top-0'}`}>
        <div className="container m-auto flex items-center justify-between flex-wrap px-4 lg:max-w-screen-lg">
            <Link href="/">
                <a>
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="rounded-full w-12" width="48" height="48" />
                        <div className="ml-2">
                            <div className="font-bold leading-none">{title}</div>
                            <div className="text-sm leading-none">{description}</div>
                        </div>
                    </div>
                </a>
            </Link>

            <div className="grid grid-flow-col gap-4 items-center">
                {links.map(({ name, path }) => (
                    <Link href={path} key={name} activeClassName="dark:text-white" partiallyActive>
                        <a className="hidden lg:inline dark:hover:text-white">
                            {name}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    </header>
);

Header.defaultProps = {
    title: 'Title',
    fixed: false,
    description: 'Description',
    logo: 'https://svgur.com/i/csw.svg',
    links: [{ name: 'Link 1', path: '/' }, { name: 'Link 2', path: '/' }],
};

export default Header;
