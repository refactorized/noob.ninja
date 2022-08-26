import { Html, Head, Main, NextScript } from 'next/document'
import { page } from '../style/styles.css'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={page.container}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
