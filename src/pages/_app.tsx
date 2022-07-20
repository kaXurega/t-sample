import type { AppPropsWithLayout } from 'next/app';
import React from 'react';
import 'styles/style.scss';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
