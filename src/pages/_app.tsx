import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';

import DismissableToast from '@components/DismissableToast';

import api from '@lib/axios';

import '../styles/globals.css';

const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
  const { data } = await api.get(`${queryKey?.[0]}`);
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DismissableToast />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
