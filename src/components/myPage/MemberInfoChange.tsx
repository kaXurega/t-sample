import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const MemberInfoChange = () => {
  return (
    <>
      <NextSeo title="MemberInfoChange" description="MemberInfoChange of tunnel app!" />
      <div className="">
        <h1>MemberInfoChange</h1>
        <Link href="../myPage">
          <a>Go MyPage</a>
        </Link>
        <Link href="../home">
          <a>Go Home</a>
        </Link>
      </div>
    </>
  );
};
