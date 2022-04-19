/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tauri App With NextJS</title>
        <meta name="description" content="Tauri App With NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>Hello, World!</h2>

        <p className={styles.description}>Tauri + NextJS</p>

        <div className={styles.grid}>
          <Link href="/about" passHref>
            <a className={styles.card}>
              <h2>About &rarr;</h2>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
          Powered by{" "}
          <span className={styles.logo}>
            NextJS + Tauri
          </span>
      </footer>
    </div>
  );
}
