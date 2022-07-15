import { NextSeo } from 'next-seo';
import Link from 'next/link';
import React from 'react';

export const Dashboard = () => {
  return (
    <>
      <NextSeo title="Dashboard" description="dashboard page of tunnel app!" />
      <section>
        <h1>Dashboard</h1>
        <p>
          <Link href="/home">
            <a>Go Home</a>
          </Link>
        </p>
      </section>
    </>
  );
};
