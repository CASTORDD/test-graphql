import Head from 'next/head';
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apolloClient'
import { Roboto } from '@next/font/google'

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '../styles/theme';
import createEmotionCache from '../createEmotionCache';
const clientSideEmotionCache = createEmotionCache();

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
        <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
      </CacheProvider>
    </ApolloProvider>
  )
}
