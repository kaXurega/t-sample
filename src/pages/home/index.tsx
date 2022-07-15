import { NextPageWithLayout } from 'next';
import { Layout } from '@/components/Layout';
import { Home } from '@/components/home/Home';

const HomePage: NextPageWithLayout = () => <Home />;
HomePage.getLayout = (page) => <Layout>{page}</Layout>;

export default HomePage;
