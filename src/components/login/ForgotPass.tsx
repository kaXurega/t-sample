import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const ForgotPass = () => {
  return (
    <>
      <NextSeo title="ForgotPass" description="ForgotPass page of tunnel app!" />
      <div className="">
        <h1>ForgotPass Page</h1>
        <>
          <h2>Enter your email address!</h2>
        </>
        <>
          <Link href="../login">
            <a>Click here to login</a>
          </Link>
        </>
      </div>
    </>
  );
};
