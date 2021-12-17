import Link from 'next/link';

const Button = ({ path, primary, label }) => (
    <Link href={path}>
        { primary ? (
            <a className="inline-flex rounded-md shadow items-center justify-center px-5 py-2 border border-transparent text-white bg-gray-600 hover:bg-gray-700">
                {label}
            </a>
        ) : (
            <a className="inline-flex rounded-md shadow items-center justify-center px-5 py-2 border border-transparent text-gray-700 bg-gray-100 hover:bg-gray-200">
                {label}
            </a>
        ) }
    </Link>
);

Button.defaultProps = {
    primary: true,
    label: 'Button',
    path: '/',
};

export default Button;
