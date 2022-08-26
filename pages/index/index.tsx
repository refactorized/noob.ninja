import type { NextPage } from 'next'
import Head from 'next/head'
import { homeHero, page } from './styles.css'

const Home: NextPage = () => {
  return (
    <div className={page.container}>
      <Head>
        <title>noob.ninja</title>
      </Head>

      <main>
        <div className={homeHero.container}>
          <h1 className={homeHero.heading}>noob.ninja</h1>
        </div>
      </main>
    </div>
  )
}

export default Home
