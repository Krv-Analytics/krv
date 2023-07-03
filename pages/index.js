import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Krv Analytics</title>
        <meta name="root" content="Home Page" />
        <link rel="icon" href="/krv_logo.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Krv Analytics  
        </h1>

        <p className={styles.description}>
        Coming soon we will be handling all your sparse, high dimensional data needs!
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/sidney-gathrid-783a3b229/" className={styles.card}>
            <h2>Sidney Gathrid &rarr;</h2>
            <p>Business Man</p>
          </a>

          <a href="https://jeremy-wayland.me/" className={styles.card}>
            <h2>Jeremy Wayland &rarr;</h2>
            <p>Lead Brain</p>
          </a>

          <a
            href="https://stuartwayland.github.io/"
            className={styles.card}
          >
            <h2>Stuart Wayland &rarr;</h2>
            <p> Intern </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
        href="https://github.com/KrV-Analytics"
        target="_blank"
        rel="noopener noreferrer"
        >
        Krv Analytics LLC
        </a>
      </footer>
    </div>
  )
}
