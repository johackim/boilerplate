import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Header = ({ title, description, logo, fixed, size, children }) => {
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();

    const sizes = {
        lg: 'lg:max-w-screen-lg',
        md: 'md:max-w-screen-md',
        xl: 'md:max-w-screen-xl',
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside, true);

        return () => document.removeEventListener('click', handleClickOutside, true);
    }, []);

    return (
        <header ref={ref}>
            <div className={`flex shadow-md inset-x-0 h-16 items-center z-20 text-gray-700 dark:bg-gray-900 dark:text-gray-300 bg-white ${fixed ? 'fixed top-0' : ''}`}>
                <div className={`container m-auto flex items-center justify-between flex-wrap px-4 ${sizes[size]}`}>
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

                    <div className="hidden md:grid grid-flow-col gap-4 items-center">{children}</div>

                    <div className="md:hidden">
                        <button type="button" onClick={() => setOpen(!isOpen)} className="bg-white dark:bg-transparent dark:hover:bg-gray-700 rounded-md p-2 inline-flex items-center justify-center text-gray-400 dark:text-gray-300 dark:hover:text-white hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                            {isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className={`sm:hidden z-20 mb-4 border-b dark:border-gray-800 fixed inset-x-0 ${fixed ? 'top-16' : ''}`}>
                    <div className="pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
                        {children.filter(({ props }) => props?.href !== undefined).map(({ props }) => (
                            <Link href={props.href} key={props.children}>
                                <a className="dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white text-gray-500 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 text-base font-medium">
                                    {props.children}
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

Header.defaultProps = {
    title: 'Title',
    fixed: false,
    size: 'lg',
    description: 'Description',
    logo: 'https://svgur.com/i/csw.svg',
};

export default Header;
