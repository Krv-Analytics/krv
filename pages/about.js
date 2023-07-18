import Head from 'next/head'
import Krv from '../src/components/krv'

const About = () => {
    return (
      <main> 
        <Head>
        <title>About</title>
        <meta name="about" content="About page" />
        <link rel="icon" href="/icon.png"  />
      </Head>

      <div class="flex flex-col justify-center items-center h-screen">
      <p class="text-black"> 
      Some information on who we are and what we do coming soon!
              </p>
      </div>
      </main>
    );
  };
  
  export default About;