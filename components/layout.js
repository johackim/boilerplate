import Header from '@components/header';
import Footer from '@components/footer';
import Link from '@components/link';

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
