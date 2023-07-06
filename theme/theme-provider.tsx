'use client'
import React, { ReactNode, Suspense } from 'react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { darkTheme, lightTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

// Create an Emotion cache for MUI with RTL support
const cache = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin]
});


export const metadata = {
  title: 'Next.js 13 + PlanetScale + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};
export default function HelalThemeProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={lightTheme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}