import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const News = () => {
  return (
    <>
      <NextSeo title="News" description="News page of tunnel app!" />
      <section>
        <h1>News</h1>
        <p>
          <Link href="home">
            <a>Go Home</a>
          </Link>
        </p>
      </section>
    </>
  );
};
