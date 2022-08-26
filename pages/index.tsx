import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>noob.ninja</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
        <h1 className={styles.title}>
          noob.ninja
        </h1>
        </div>
      </main>
    </div>
  )
}

export default Home
