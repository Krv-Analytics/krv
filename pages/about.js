import Head from 'next/head'
import styles from '../styles/Home.module.css'

const About = () => {
    return (
      <main> 
        <Head>
        <title>About</title>
        <meta name="about" content="About page" />
        <link rel="icon" href="/icon.png"  />
      </Head>
      <div >
      <p className={styles.description}> 
      Some information on who we are and what we do coming soon!
              </p>
      </div>
      </main>
    );
  };
  
  export default About;