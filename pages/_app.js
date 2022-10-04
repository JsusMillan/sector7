import '../styles/globals.css'
import Layout from '../components/Layout/Main'
import { DefaultSeo } from 'next-seo';
import SEO from '../settings/next-seo.config'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
