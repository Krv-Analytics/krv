import Head from 'next/head'
import Link from 'next/link';

const Team = () => {
    return (
      <main>
      <Head>
        <title>Contact</title>
        <meta name="team" content="Meet the Team" />
        <link rel="icon" href="/icon.png"/>
      </Head>
      <div class="flex flex-col justify-center items-start h-screen">
      <h1 class="text-black ml-40 text-4xl font-bold mr-40">Founders</h1>



      {/* Jeremy  */}
      <h2 class="text-black ml-40 mt-6 mr-40 text-2xl">Jeremy Wayland</h2>
      <p class="text-black ml-40 mt-2 mr-40 text-m"> 
      <span class="font-bold">Bio </span> PHd Student at Helmholtz Munich studying AI and Mathematics
      </p>
      <p class="text-black ml-40 mt-2 mr-40 text-m"> 
      <span class="font-bold"> Personal Website:</span> <Link href="https://jeremy-wayland.me/"> https://jeremy-wayland.me/</Link>
      </p>
      <p class="text-black ml-40 mt-2 mr-40 text-m"> 
      <span class="font-bold"> Github:</span>  <Link href="https://github.com/jeremy-wayland"> https://github.com/jeremy-wayland</Link>
      </p>
       {/* Sidney */}



      <h2 class="text-black ml-40 mt-6 mr-40 text-2xl">Sidney Gathrid</h2>
      <p class="text-black ml-40 mt-2 mr-40 text-m"> 
      <span class="font-bold">Bio </span> Solutions engineer pioneering distributed hydropower at an environmental technology startup.  
      </p>
      <p class="text-black ml-40 mt-2 mr-40 text-m"> 
      <span class="font-bold"> Github:</span> <Link href="https://github.com/sgathrid"> https://github.com/sgathrid</Link>
      </p>

      {/* Stu  */}
      <h2 class="text-black ml-40 mt-6 mr-40 text-2xl">Stuart Wayland</h2>
      <p class="text-black ml-40 mt-2 mr-40 text-m"> 
      <span class="font-bold">Bio </span> Masters Student at University of California, Santa Cruz studying quantum algorithms. 
      </p>
      <p class="text-black ml-40 mt-2 mr-40 text-m"> 
      <span class="font-bold"> Personal Website:</span> <Link href="https://stuartwayland.github.io/"> https://stuartwayland.github.io/</Link>
      </p>
      <p class="text-black ml-40 mt-2 mr-40 text-m"> 
      <span class="font-bold"> Github:</span> <Link href="https://github.com/stuartwayland"> https://github.com/stuartwayland</Link>
      </p>
      </div>
      </main>
    );
  };
  
  export default Team;
  