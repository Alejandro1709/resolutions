import { ResolutionProvider } from '../context/resolutionContext'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ResolutionProvider>
      <Component {...pageProps} />
    </ResolutionProvider>
  )
}
