import '../styles/globals.css'
import Layout from '../components/Layout/Main'
import { DefaultSeo } from 'next-seo';
import SEO from '../settings/next-seo.config'
import script from 'next/script';


function MyApp({ Component, pageProps }) {
  return (
    <>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-Q6PERZ0QND"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-Q6PERZ0QND');
</script>

      <Layout>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
