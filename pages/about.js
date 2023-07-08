import Head from 'next/head'
import styles from '../styles/pages.module.css'

const About = () => {
    return (
      <main> 
        <Head>
        <title>About</title>
        <meta name="about" content="About page" />
        <link rel="icon" href="/icon.png"  />
      </Head>
      <div className={styles.writing_heading}>
        <h1>
          About
        </h1>
      <p className={styles.description}> 
      Some information on who we are and what we do coming soon!
              </p>
      </div>
      </main>
    );
  };
  
  export default About;