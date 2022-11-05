import '../styles/globals.css'
import Layout from '../components/Layout/Main'
import { DefaultSeo } from 'next-seo';
import SEO from '../settings/next-seo.config'
import { GoogleAnalytics } from "nextjs-google-analytics";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics strategy="lazyOnload" />
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
