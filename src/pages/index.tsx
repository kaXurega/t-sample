import { Home } from 'components/home/Home';
import { Layout } from 'components/Layout';
import { NextPageWithLayout } from 'next';
import React from 'react';

// const IndexPage: NextPage = () => {
//   return (
//     <div>
//       <NextSeo title="Tunnel App" description="A tunnel application!" />
//       <h1>LP</h1>
//       <Link href="home">
//         <a>start</a>
//       </Link>
//     </div>
//   );
// };

// export default IndexPage;

const HomePage: NextPageWithLayout = () => <Home />;
HomePage.getLayout = (page) => <Layout>{page}</Layout>;

export default HomePage;
