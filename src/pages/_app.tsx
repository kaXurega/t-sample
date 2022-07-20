import type { AppPropsWithLayout } from 'next/app';
import React, { useEffect } from 'react';
import 'styles/style.scss';

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader) loader.style.display = 'none';
    }
  }, []);

  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
};

export default MyApp;
