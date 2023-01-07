import Layout from '../components/Layout'
import { YoutubeContext } from '../context/YoutubeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <YoutubeContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </YoutubeContext>
  )
}

export default MyApp
