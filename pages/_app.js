import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';

function MyApp({ Component, pageProps }){
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <meta name='keywords' content={'spacex, rocket, space, Nasa'}/>
                <meta name='description' content={'SpaceX launches explorer and visualisation tool'}/>
                <link rel='icon' href='/favicon.ico'/>
                <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.5/build/pure-min.css"
                      integrity="sha384-LTIDeidl25h2dPxrB2Ekgc9c7sEC3CWGM6HeFmuDNUjX76Ert4Z4IY714dhZHPLd"
                      crossOrigin="anonymous"/>
                <title>SpaceX launches graph</title>
            </Head>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
