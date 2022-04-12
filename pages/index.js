import Layout from '@components/layout';
import { Hero } from '@johackim/design-system';

const Page = () => <Hero centered={false} />;

Page.getLayout = (page) => <Layout className="flex flex-col justify-center">{page}</Layout>;

export default Page;
