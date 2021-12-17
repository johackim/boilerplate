import Link from 'next/link';

const Hero = ({ headline, subheadline, callToAction, secondaryAction }) => (
    <section className="text-center">
        <h1 className="text-3xl md:text-5xl max-w-2xl font-medium leading-tight mx-auto">{headline}</h1>
        <h2 className="text-base md:text-xl">{subheadline}</h2>
        <div className="mt-4 grid gap-2 mx-4 sm:grid-flow-col sm:auto-cols-max sm:justify-center">
            <Link href={callToAction.path}>
                <a className="border rounded-md py-2 px-6 inline-block dark:hover:border-white dark:hover:text-white">
                    {callToAction.name}
                </a>
            </Link>

            <Link href={secondaryAction.path}>
                <a className="border rounded-md py-2 px-6 inline-block dark:hover:border-white dark:hover:text-white">
                    {secondaryAction.name}
                </a>
            </Link>
        </div>
    </section>
);

Hero.defaultProps = {
    headline: 'Headline',
    subheadline: 'Sub-headline',
    callToAction: { name: 'Call to action', path: '/' },
    secondaryAction: { name: 'Secondary action', path: '/' },
};

export default Hero;
