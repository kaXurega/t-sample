import { NextPageWithLayout } from 'next';
import { Layout } from 'components/Layout';
import { MyPageInfo } from 'components/myPage/MyPage';

const MyPage: NextPageWithLayout = () => <MyPageInfo />;
MyPage.getLayout = (page) => <Layout>{page}</Layout>;

export default MyPage;
