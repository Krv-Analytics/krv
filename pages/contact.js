import Head from 'next/head'
import Link from 'next/link';
import styles from '../styles/pages.module.css'

const Team = () => {
    return (
      <div className={styles.container}>
        <main>
      <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="team" content="Meet the Team" />
        <link rel="icon" href="/icon.png"  />
      </Head>
      <div className={styles.writing_heading}>
        <h1>Contact</h1>
        <p> 
          Coming soon!
        </p>
         </div>
        </div> 
      </main>
      </div>
    );
  };
  
  export default Team;
  