import { Footer, Header, Link } from '@johackim/design-system';

export default ({ children, className }) => (
    <>
        <Header fixed>
            <Link href="/">Link 1</Link>
            <Link href="/">Link 2</Link>
            <Link href="/">Link 3</Link>
        </Header>
        <main className={className}>{children}</main>
        <Footer />
    </>
);
