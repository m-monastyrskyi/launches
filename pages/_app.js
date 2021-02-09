import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/global.css';

function MyApp({ Component, pageProps }){
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <meta name='keywords' content={'spacex, rocket, space, Nasa'}/>
                <meta name='description' content={'SpaceX launches explorer and visualisation tool'}/>
                <link rel='icon' href='/favicon.ico'/>
                <title>SpaceX launches graph</title>
            </Head>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
