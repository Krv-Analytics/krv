
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Krv from '../src/components/krv'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Krv</title>
        <meta name="root" content="Home Page" />
        <link rel="icon" href="/icon.png"  />
      </Head>
      <main className={styles.main}>
      <div style={{alignItems: 'center' }}>
      <Krv scale={1.5}/>
      </div>
        <p className={styles.description}>
        Topoligical Data Analysis and Graph Learning
        </p>
      </main>

      <footer className={styles.footer}>
        <a
        href="https://github.com/orgs/KrV-Analytics/dashboard"
        target="_blank"
        rel="noopener noreferrer"
        >
        Check us out on Github!
        </a>
      </footer>
    </div>
  )
}
