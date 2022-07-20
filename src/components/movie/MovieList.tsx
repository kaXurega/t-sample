import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const MovieList = () => {
  return (
    <>
      <NextSeo title="MovieList" description="movie page of tunnel app!" />
      <section>
        <div className="">
          <h1 className="">MovieList</h1>
          <p>
            <Link href="/">
              <a>Go Home</a>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};
