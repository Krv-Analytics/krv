import Head from 'next/head'
import Krv from '../src/components/krv'

const About = () => {
    return (
      <div class="bg-graph bg-no-repeat bg-top bg-contain">
        <main> 
          <Head>
          <title>About</title>
          <meta name="about" content="About page" />
          <link rel="icon" href="/icon.png"  />
          </Head>

        <div class="flex flex-col justify-center h-screen">
        <h1 class=" ml-40 text-black text-3xl font-bold mr-40">NEXT, NEXT LEVEL ANALYTICS</h1>
        
        <p class="ml-40 mt-8 text-black text-xl mr-40"> 
        At <span class= "text-[#b91c1c] font-bold">KRV ANALYTICS</span>, we are pioneering graphical data analysis and 
        model comparison, providing transparency in otherwise indistinguishable 
        data. Through innovative methodology and a groundbreaking approach to data-driven analytics and machine learning, we offer the ability to view and understand multi-disciplinary data from a new and bold perspective.
                </p>
        </div>
        </main>
      </div>
    );
  };
  
  export default About;