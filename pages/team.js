import Head from 'next/head'
import Link from 'next/link';
import Card from '../src/components/card'
import React from 'react';

const Team = () => {
    return (
      <main>
      <Head>
        <title>Contact</title>
        <meta name="team" content="Meet the Team" />
        <link rel="icon" href="/icon.png"/>
      </Head>
  

    <div class="min-h-screen flex flex-col items-center justify-center">  
      <div class="flex flex-row items-center ">    
      <div>
        <Card name="Jeremy Wayland" 
        image="/place_holder.png"
        description="PhD Student at Helmholtz Munich."
         githubUrl="https://github.com/jeremy-wayland"
         linkedInUrl="https://www.linkedin.com/in/jeremy-wayland/"
         websiteUrl="https://jeremy-wayland.me/"
        facebookUrl="https://www.facebook.com/jeremy.wayland.92"
        >
    </Card>
    </div>
    <div class="ml-3 sm:ml-2 md:ml-3 lg:ml-4">
    <Card name="Sidney Gathrid"
        image="/place_holder.png"
        description="Env technology solutions engineer."
        githubUrl="https://github.com/sgathrid"
        linkedInUrl="https://www.linkedin.com/in/sidney-gathrid-783a3b229/"
       facebookUrl="https://www.facebook.com/sidney.gathrid.1"
        >
    </Card>
    </div>
    </div>

    <div class="mt-3 sm: mt-2 md:mt-3 lg:mt-4 mb-4 sm:mb-3 md:mb-4 lg:mb-5">
    <Card name="Stuart Wayland"
          image="/place_holder.png"
          description="Masters Student at UC Santa Cruz."
          githubUrl="https://github.com/stuartwayland"
         linkedInUrl="https://www.linkedin.com/in/stuart-wayland-96b621253/"
         websiteUrl="https://stuartwayland.github.io/"
        facebookUrl="https://www.facebook.com/stuart.wayland.7/">
    </Card>
    </div>  
</div>
</main>
    );
  };
  
  export default Team;
  