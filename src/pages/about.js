/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tauri App With NextJS: About</title>
        <meta name="description" content="Tauri App With NextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2 className={styles.title}>About</h2>

        <p className={styles.description}>Tauri + NextJS</p>

        <div className={styles.grid}>
          <a
            href="https://tauri.studio"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/tauri.png" alt="Tauri Logo" width={50} height={50} />
            <h2>Tauri</h2>
          </a>

          <a
            href="https://nextjs.org"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/nextjs.png" alt="NextJS Logo" width={145} height={87} />
          </a>

          <a
            href="https://github.com/pinalbhatt/tauri-with-nextjs"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>Tauri+NextJS</h2>
          </a>

          <div className={styles.grid}>
            <Link href="/" passHref>
              <a className={styles.card}>
                <h2>&larr; Home </h2>
              </a>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
