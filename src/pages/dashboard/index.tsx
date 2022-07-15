import { NextPageWithLayout } from 'next';
import { Layout } from '@/components/Layout';
import { Dashboard } from '@/components/dashboard/dashboard';

const DashboardPage: NextPageWithLayout = () => <Dashboard />;
DashboardPage.getLayout = (page) => <Layout>{page}</Layout>;

export default DashboardPage;
