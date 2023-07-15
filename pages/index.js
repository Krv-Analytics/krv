
import Head from 'next/head'
import Krv from '../src/components/krv'
import Image from 'next/image';

export default function Home() {
  return (

    <div className="content-center">
      <Head>
        <title>Krv Analytics</title>
        <meta name="root" content="Home Page" />
        <link rel="icon" href="/icon.png"  />
      </Head>
      <main>
      <div class="h-screen flex items-center justify-center">
      <Krv />
      </div>

        <p className="text-center text-sm">
        **We are currently in the process of setting up our webapp. Stay tuned!**
        </p>
      </main>

      <footer class=" text-center  ">
        <a
        href="https://github.com/orgs/KrV-Analytics/dashboard"
        target="_blank"
        rel="noopener noreferrer"
        >
        Check us out on Github!
        </a>
      </footer>
    </div>
  )
}
