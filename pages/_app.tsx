import type { AppProps } from 'next/app'

// import site fonts here
import '@fontsource/kelly-slab'
import '@fontsource/cute-font'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
