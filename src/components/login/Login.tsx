import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const Login = () => {
  return (
    <>
      <NextSeo title="Login" description="login page of tunnel app!" />
      <div className="">
        <h1>Login Page</h1>
        <Link href="/home">
          <a>login</a>
        </Link>
      </div>
    </>
  );
};
