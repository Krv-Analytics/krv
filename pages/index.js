
import Head from 'next/head'
import Krv from '../src/components/krv'
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div class="bg-graph bg-no-repeat bg-[center_top_-3rem] bg-[length:750px_750px]">
    <div class="flex flex-col items-center justify-center h-screen ">
      <Head>
        <title>Krv Analytics</title>
        <meta name="root" content="Home Page" />
        <link rel="icon" href="/icon.png"  />
      </Head>
      <main class="flex flex-col items-center justify-center flex-grow">
      <div class= "flex items-center justify-center mb-14">
      {/* <Krv /> */}

      <h1 class="b-4 text-4xl font-sans font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl"> KRV ANALYTICS</h1>
      </div>
      </main>
      </div>
      <footer class=" text-center text-black">
        <Link
        href="https://github.com/orgs/KrV-Analytics/dashboard"
        target="_blank"
        rel="noopener noreferrer"
        >
        Check us out on Github!
        </Link>
      </footer>
    </div>
  )
}
