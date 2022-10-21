import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '@nx-next-mui-seed/shared/ui/material/theme/config';
import createEmotionCache from '@nx-next-mui-seed/shared/ui/material/theme/create-emotion-cache';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function CustomApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Welcome to stoke-ui!</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main className="app">
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </CacheProvider>
  );
}

export default CustomApp;
