import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

const IndexPage: NextPage = () => {
  return (
    <div>
      {/* <Page> */}
      <NextSeo title="Tunnel App" description="A tunnel application!" />
      {/* <Header />
      <main>
        <VideoSection />
        <ListSection />
        <FeatureSection />
        <CasesSection />
        <PricingTable />
      </main>
      <Footer />
      </Page> */}
      <h1>LP</h1>
      <Link href="/login">
        <a>start</a>
      </Link>
    </div>
  );
};

export default IndexPage;
