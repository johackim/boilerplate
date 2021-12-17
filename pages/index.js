import Layout from '../components/layout';
import Hero from '../components/hero';

const Page = () => <Hero />;

Page.getLayout = (page) => <Layout className="flex flex-col justify-center">{page}</Layout>;

export default Page;
