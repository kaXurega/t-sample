import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, [router]);

  return (
    <>
      <NextSeo title="Logout" description="logout page of tunnel app!" />
      <div className="">
        <h1>Logout Page</h1>
        <p>Returns to the start page after 1second.</p>
      </div>
    </>
  );
};
