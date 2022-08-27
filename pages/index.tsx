import type { NextPage } from 'next'
import Head from 'next/head'
import { homeHero, page } from '@style/styles.css'

const Home: NextPage = () => {
  return (
    <div className={page.container}>
      <Head>
        <title>n00b.ninja</title>
      </Head>

      <main>
        <div className={homeHero.container}>
          <h1 className={homeHero.heading}>n00b.ninja</h1>
        </div>
      </main>
    </div>
  )
}

export default Home
