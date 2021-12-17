import Button from './button';

const Hero = ({ preHead, headline, subHeadline, callToAction, secondaryAction }) => (
    <section className="h-screen flex justify-center text-center items-center mx-auto">
        <div className="px-2 sm:px-0">
            {preHead && <h3 className="text-sm lg:text-lg my-4">{preHead}</h3>}

            { headline && <h2 className="mx-auto text-3xl max-w-2xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">{headline}</h2> }

            { subHeadline && <h3 className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">{subHeadline}</h3> }

            <div className="mt-4 grid gap-2 sm:grid-flow-col sm:auto-cols-max sm:justify-center">
                { callToAction && <Button path={callToAction.path} label={callToAction.name} /> }
                { secondaryAction && <Button path={secondaryAction.path} label={secondaryAction.name} primary={false} /> }
            </div>
        </div>
    </section>
);

Hero.defaultProps = {
    preHead: '',
    headline: 'Headline',
    subHeadline: 'Sub-headline',
    callToAction: { name: 'Call to action', path: '/' },
    secondaryAction: { name: 'Secondary action', path: '/' },
};

export default Hero;
