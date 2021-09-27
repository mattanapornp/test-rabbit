import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import TagManager from 'react-gtm-module';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import customTheme from '@styles/chakra/theme';
import nextI18NextConfig from '../../next-i18next.config';
import { StateProvider } from 'contexts/leasingConfigProvider';
import reducer, { initialState } from 'contexts/leasingStateReducer';

import '@styles/scss/app.scss';
import { GTM_ID } from 'lib/constants/config';

function MyApp({ Component, pageProps }: AppProps) {
  const theme = extendTheme(customTheme);

  // setup GTM
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({
        gtmId: GTM_ID,
      });
    }
  }, []);

  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </StateProvider>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
