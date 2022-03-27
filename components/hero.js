import Button from '@components/button';

const Hero = ({ children, preHead, headline, subHeadline, centered }) => (
    <section className={`${centered && 'h-screen'} flex justify-center text-center items-center mx-auto`}>
        <div className="px-2 sm:px-0">
            {preHead && <h3 className="text-sm lg:text-lg my-4">{preHead}</h3>}

            { headline && <h1 className="mx-auto text-3xl max-w-2xl tracking-tight leading-10 font-medium text-gray-700 dark:text-gray-300 sm:text-5xl sm:leading-none md:text-6xl">{headline}</h1> }

            { subHeadline && <h2 className="max-w-md mx-auto text-base text-gray-500 dark:text-gray-400 sm:text-lg md:text-xl md:max-w-3xl">{subHeadline}</h2> }

            <div className="mt-4 grid gap-2 sm:grid-flow-col sm:auto-cols-max sm:justify-center">
                {children}
            </div>
        </div>
    </section>
);

Hero.defaultProps = {
    centered: true,
    preHead: '',
    headline: 'Headline',
    subHeadline: 'Sub-headline',
    children: [
        <Button key="main" href="/">Call To Action</Button>,
        <Button key="secondary" href="/" secondary>Secondary Action</Button>,
    ],
};

export default Hero;
