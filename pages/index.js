import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gaming Log</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Gaming Log
        </h1>

        <p className={styles.description}>
          Info about your games in one place.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Library &rarr;</h3>
            <p>Organize your games collection.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Backlog &rarr;</h3>
            <p>Manage your gaming backlog</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
