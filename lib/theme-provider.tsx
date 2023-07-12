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

export default function HelalThemeProvider({ children }: { children: ReactNode }) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={lightTheme}>
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}