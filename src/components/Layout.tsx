import Head from 'next/head';
import React from 'react';
import { LayoutProps } from 'types';
// import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

export const Layout = (props: LayoutProps) => {
  const { title = 'Tunnel app', description = 'This is a Tunnel app', children } = props;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0" />
        <meta name="description" content={description} />
        <link rel="manifest" href="/manifest.jsonc" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <>
        {/* <Navbar /> */}
        <div className="h-screen flex flex-row justify-start">
          <Sidebar />
          <div className="bg-primary flex-1 p-4 text-white">
            <div className="flex flex-col md:flex-row flex-1">
              <aside className="bg-fuchsia-100 w-full md:w-60" />
              {children}
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};
