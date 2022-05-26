import { ChakraProvider } from '@chakra-ui/react';
import Header from '@components/Header';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  </QueryClientProvider>
);

export default App;
