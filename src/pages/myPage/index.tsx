import { NextPageWithLayout } from 'next';
import { Layout } from '@/components/Layout';
import { Profile } from '@/components/myPage/Profile';

const MyPage: NextPageWithLayout = () => <Profile />;
MyPage.getLayout = (page) => <Layout>{page}</Layout>;

export default MyPage;
