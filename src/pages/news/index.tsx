import { NextPageWithLayout } from 'next';
import { Layout } from 'components/Layout';
import { News } from 'components/news/news';

const NewsPage: NextPageWithLayout = () => <News />;
NewsPage.getLayout = (page) => <Layout>{page}</Layout>;

export default NewsPage;
