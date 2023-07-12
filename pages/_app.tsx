import HelalThemeProvider from '../lib/theme-provider';
import DashboardLayout from '../app/dashboard-layout';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

import '../lib/global.scss';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div dir={'rtl'}>
      <QueryClientProvider client={queryClient}>
        <HelalThemeProvider>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
        </HelalThemeProvider>
      </QueryClientProvider>
    </div>


  );
}