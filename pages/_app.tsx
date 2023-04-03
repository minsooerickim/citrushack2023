import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';
import { Session } from 'next-auth';
import { Toaster } from 'react-hot-toast';

import { UserBar } from '@/components/UserBar';
import { MLHBanner } from '@/components/MLHBanner';
import Nav from '@/components/Nav';

import { withPasswordProtect } from 'next-password-protect';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function App({
  Component,
  pageProps
}: AppProps<{
  session: Session;
}>) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
      <ThemeProvider enableSystem={false}>
        <div className="fixed z-[1000] w-full flex justify-center items-center">
          <div className="flex items-start justify-end w-[97%]">
            <UserBar />
            <MLHBanner />
          </div>
        </div>
        <Nav />
        <Component {...pageProps} />
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
}

// Before: export default App;
export default process.env.PASSWORD_PROTECT
  ? withPasswordProtect(App, {
      // Options go here (optional)
      loginApiUrl: '/api/login',
      loginComponentProps: {
        logo: '/assets/logo.png'
      }
    })
  : App;
