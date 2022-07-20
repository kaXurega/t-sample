import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const Home = () => {
  return (
    <>
      <NextSeo title="Home" description="home page of tunnel app!" />
      <section>
        <h1>Home</h1>
        <div className="">
          {/* <Link href="myPage">
            <a>Go MyPage</a>
          </Link> */}
        </div>
      </section>
    </>
  );
};
