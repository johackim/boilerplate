import Header from './header';
import Footer from './footer';

export default function Layout({ children, className }) {
    return (
        <>
            <Header fixed />
            <main className={className}>{children}</main>
            <Footer />
        </>
    );
}
