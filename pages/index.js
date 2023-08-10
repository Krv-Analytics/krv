
import Head from 'next/head'
import Krv from '../src/components/krv'
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div class="bg-graph bg-no-repeat bg-top bg-contain">
    <div class="flex flex-col items-center justify-center h-screen ">
      <Head>
        <title>  Krv Analytics </title>
        <meta name="root" content="Home Page" />
        <link rel="icon" href="/icon.png"  />
      </Head>
      <main class="flex flex-col items-center justify-center flex-grow">
      <div class= "flex items-center justify-center mb-14">


      <h1 class="b-4 text-4xl font-sans font-extrabold leading-none tracking-tight text-black md:text-5xl lg:text-6xl"> KRV ANALYTICS</h1>
      </div>
      </main>
      </div>
      <footer className=" text-center text-black">
        More Coming Soon! 
      </footer>
    </div>
  )
}
