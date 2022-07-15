import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const Profile = () => {
  return (
    <>
      <NextSeo title="MyPage" description="mypage of tunnel app!" />
      <div className="">
        <h1>My Page</h1>
        <p>
          <Link href="/home">
            <a>Go Home</a>
          </Link>
        </p>
      </div>
    </>
  );
};
