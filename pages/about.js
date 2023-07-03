import Head from 'next/head'

const About = () => {
    return (
      <main> 
        <Head>
        <title>About</title>
        <meta name="about" content="About page" />
        <link rel="icon" href="/icon.png"  />
      </Head>
      <div >
        <p textAlign='center'>
          Coming soon some information about our team!
          </p>
      </div>
      </main>
    );
  };
  
  export default About;