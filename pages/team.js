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
      <div class="flex flex-col justify-center items-center h-screen">
      <h1 class="text-black">Meet the Team!</h1>
      </div>
      </main>
    );
  };
  
  export default Team;
  