import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Wrapper from '../components/wrapper.js'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Wrapper>
    <Component {...pageProps} />
  </Wrapper>
  )
}
