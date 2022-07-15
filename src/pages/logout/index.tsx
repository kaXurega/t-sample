import { NextPageWithLayout } from 'next';
import { Layout } from '@/components/Layout';
import { Logout } from '@/components/logout/Logout';

const LogoutPage: NextPageWithLayout = () => <Logout />;
LogoutPage.getLayout = (page) => <Layout>{page}</Layout>;

export default LogoutPage;
