import '../styles/globals.css'
import Layout from '../components/Layout/Main'
import { DefaultSeo } from 'next-seo';
import SEO from '../settings/next-seo.config'
import Script from 'next/script';


function MyApp({ Component, pageProps }) {
  return (
    <>
     <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-Q6PERZ0QND'} />

<Script strategy="lazyOnload">
    {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-Q6PERZ0QND', {
        page_path: window.location.pathname,
        });
    `}
</Script>

      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
