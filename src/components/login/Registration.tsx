import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const Registration = () => {
  return (
    <>
      <NextSeo title="Registration" description="Registration page of tunnel app!" />
      <div className="">
        <h1>Registration Page</h1>
        <>
          <Link href="../home">
            <a>Register</a>
          </Link>
        </>
        <>
          <Link href="../login">
            <a>Back to Login</a>
          </Link>
        </>
      </div>
    </>
  );
};
