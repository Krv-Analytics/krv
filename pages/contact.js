import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Team = () => {
    return (
      <div className={styles.container}>
        <main>
      <div className={styles.container}>
      <Head>
        <title>Meet the Team</title>
        <meta name="team" content="Meet the Team" />
        <link rel="icon" href="/icon.png"  />
      </Head>
      <p className={styles.description}> 
     Contact info coming soon!
              </p>
      {/* </div>
        <p className={styles.description}>
        Meet our Team! 
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
    </a> */}
        </div> 
      </main>
      </div>
    );
  };
  
  export default Team;
  