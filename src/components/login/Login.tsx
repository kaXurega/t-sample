import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const Login = () => {
  return (
    <>
      <NextSeo title="Login" description="login page of tunnel app!" />
      <div className="">
        <h1>Login Page</h1>
        <>
          <Link href="home">
            <a>login</a>
          </Link>
        </>
        <>
          <Link href="login/memberRegistration">
            <a>Click here to register</a>
          </Link>
        </>
        <>
          <Link href="login/forgotPass">
            <a>Forgot Password?</a>
          </Link>
        </>
      </div>
    </>
  );
};
