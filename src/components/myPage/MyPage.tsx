import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const MyPageInfo = () => {
  return (
    <>
      <NextSeo title="MyPage" description="mypage of tunnel app!" />
      <div className="">
        <h1>MyPage</h1>
        <>
          <Link href="myPage/memberInfoChange">
            <a>Click here to change your membership information!</a>
          </Link>
        </>
        <>
          <Link href="myPage/withdrawalRequest">
            <a>Click here to apply for withdrawal</a>
          </Link>
        </>
        <>
          <Link href="/">
            <a>Go Home</a>
          </Link>
        </>
      </div>
    </>
  );
};
