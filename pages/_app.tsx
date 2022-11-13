import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
