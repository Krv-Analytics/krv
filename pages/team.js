import Head from 'next/head'
import Link from 'next/link';
import Card from '../src/components/card'
import React from 'react';

const Team = () => {
    return (
      <div class="bg-graph bg-no-repeat bg-top bg-contain">
      <main>
      <Head>
        <title>Contact</title>
        <meta name="team" content="Meet the Team" />
        <link rel="icon" href="/icon.png"/>
      </Head>
  

      <div class="min-h-screen flex flex-col justify-center items-center">
  <div class="grid grid-cols-2 gap-4">
    <div>
      <Card
        name="Jeremy Wayland"
        image="/place_holder.png"
        description="PhD Student - Helmholtz Munich."
        githubUrl="https://github.com/jeremy-wayland"
        linkedInUrl="https://www.linkedin.com/in/jeremy-wayland/"
        websiteUrl="https://jeremy-wayland.me/"
      ></Card>
    </div>
    <div>
      <Card
        name="Sidney Gathrid"
        image="/place_holder.png"
        description="Employed - Solutions Engineer."
        githubUrl="https://github.com/sgathrid"
        linkedInUrl="https://www.linkedin.com/in/sidney-gathrid-783a3b229/"
      ></Card>
    </div>
  </div>
  <div>
  <div class= "mt-4 sm:mt-3 md:mt-4 lg:mt-5">
  
      <Card
        name="Stuart Wayland"
        image="/place_holder.png"
        description="Masters Student - UC Santa Cruz."
        githubUrl="https://github.com/stuartwayland"
        linkedInUrl="https://www.linkedin.com/in/stuart-wayland-96b621253/"
        websiteUrl="https://stuartwayland.github.io/"
        imageClasses="mx-auto"
      ></Card>
    </div>
  </div>
</div>

</main>
</div>
    );
  };
  
  export default Team;
  