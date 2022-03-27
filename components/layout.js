import Header from '@components/header';
import Footer from '@components/footer';

export default function Layout({ children, className }) {
    return (
        <>
            <Header fixed />
            <main className={className}>{children}</main>
            <Footer />
        </>
    );
}
