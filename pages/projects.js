import Head from 'next/head'
import Link from 'next/link';

const Projects = () => {
    return (
      <main>
        <Head>
          <title>Contact</title>
          <meta name="team" content="Meet the Team" />
          <link rel="icon" href="/icon.png"/>
        </Head>
        <div class="flex flex-col justify-center h-screen">
          <h1 class=" ml-40 mt-20 text-black text-3xl font-bold mr-40">CURRENT PROJECTS</h1>
            <p class="ml-40 mt-8 text-[#b91c1c] text-xl mr-40"> 
                  Comprehensive Private Sector Valuation and Benchmarking
            </p>
        
        
            <p class="ml-40 text-black text-xl mr-40">
              Strategic Coal Phase-Out Frameworks
            </p>
        
            <p class="ml-40 text-black text-xl mr-40">
              Outlier / Malicious Transaction Detection in Corporate Balance Sheets
            </p>
            <p class="ml-40  mt-10 text-black text-sm mr-40">
                To read more about our current projects, you can check out the following links: 
            </p>
            <li class="ml-40  mt-2 text-[#b91c1c] text-sm mr-40">
              <Link href="/files/THEMA_tech_finance.pdf"> Middle Market Technology Report </Link>
            </li>
            <li class="ml-40 text-black text-sm mr-40">
              <Link href="/files/coal_phaseout_slidedeck.pdf"> US Coal Plant Phase out Slides  </Link> 
            </li>
        </div>
      </main>
    );
  };
  
  export default Projects;
  