import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache, { theme } from '../../styles/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Provider } from 'urql';
import { client } from '../configs/bootstrapGql';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const App = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {
  return (
    <React.StrictMode>
      <Provider value={client}>
        <CacheProvider value={emotionCache}>
          <Head>
            <title>PG Finder</title>
            <meta
              name="viewport"
              content="initial-scale=1, width=device-width"
            />
          </Head>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
