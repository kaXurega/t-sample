import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const WithdrawalReq = () => {
  return (
    <>
      <NextSeo title="WithdrawalRequest" description="WithdrawalRequest of tunnel app!" />
      <div className="">
        <h1>WithdrawalRequest</h1>
        <>
          <Link href="../../">
            <a>withdrawal from a group</a>
          </Link>
        </>
      </div>
    </>
  );
};
