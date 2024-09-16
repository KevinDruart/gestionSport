'use client'

import { SessionProvider } from "next-auth/react"
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './lib/store'
import { AuthWrapper } from '../app/components/auth/AuthWrapper'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ReduxProvider store={store}>
        <HelmetProvider>
          <AuthWrapper>{children}</AuthWrapper>
        </HelmetProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}