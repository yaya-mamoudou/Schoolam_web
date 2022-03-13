import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Provider } from 'react-redux';
import { useStore } from '../redux/store';
import '../public/i18n/i18n';
import Head from 'next/head';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['property'])),
      // Will be passed to the page component as props
    },
  };
}

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>

        {/* Karma fonts  */}
        {/* USE IN CSS FILE */}
        {/* 
          font-family: 'Karma', serif;
          font-family: 'Yantramanav', sans-serif;
         */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Karma:wght@300&family=Yantramanav:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
