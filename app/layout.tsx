import { Analytics } from '@vercel/analytics/react';
import HelalThemeProvider from '../theme/theme-provider';
import DashboardLayout from './dashboard-layout';
import QueryProvider from '../theme/query-provider';
import '../theme/global.scss'
export const metadata = {
  title: 'Next.js 13 + PlanetScale + NextAuth + Tailwind CSS',
  description:
    'A user admin dashboard configured with Next.js, PlanetScale, NextAuth, Tailwind CSS, TypeScript, ESLint, and Prettier.'
};

export default async function RootLayout({
                                           children
                                         }: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fa-IR' dir={'rtl'}>
    <QueryProvider>
      <HelalThemeProvider>
        <body>
        <DashboardLayout>
          {children}
        </DashboardLayout>
        <Analytics />
        </body>
      </HelalThemeProvider>
    </QueryProvider>

    </html>
  );
}
