import Head from 'next/head'


const About = () => {
    return (
      <div class="bg-no-repeat bg-top bg-contain">
        <main> 
          <Head>
          <title>About</title>
          <meta name="about" content="About page" />
          <link rel="icon" href="/icon.png"  />
          </Head>

        <div class="flex flex-col justify-center h-screen">
        <h1 class=" ml-40 text-black text-4xl font-bold mr-40">Welcome </h1>
        
        <p class="ml-40 mt-8 text-black text-2xl mr-40"> 
        Welcome to <span class= "text-[#b91c1c] font-bold">KRV ANALYTICS</span>, 
        where cutting-edge technology meets the intricate world of data analysis. 
        Our flagship solution, <span class= "text-[#b91c1c] font-bold">THEMA</span>, stands as a groundbreaking algorithm designed 
        to transform the way you perceive and navigate complex datasets.
        </p>


        <p class="ml-40 mt-8 text-black text-2xl mr-40"> 
          At the heart of our innovation is the ability to generate insightful graph models 
          from point clouds, offering a unique approach to approximating local geodesic 
          distances. By seamlessly integrating state-of-the-art methods in manifold learning, 
          topological data analysis, and graph learning,
          THEMA empowers you with a fast and detailed cohort analysis. 
          Imagine condensing potential representations into a manageable set, allowing you to explore intricate relationships at multiple scales through our intuitive visual graph interface.
          </p>
        <p class="ml-40 mt-8 text-black text-2xl mr-40"> 
      Our success story unfolds in the realm of energy analysis, where THEMA has
      proven invaluable in assessing the retirement likelihood of US Coal plants. 
      Building on this triumph, we proudly extend THEMA into the financial domain, 
      unleashing its prowess in uncovering localized valuations. In the financial sector, 
      THEMA becomes your powerful ally, offering a transformative perspective on 
 understanding the nuanced landscape of dynamic financial ecosystems.
 </p>
        <p class="ml-40 mt-8 text-black text-2xl mr-40"> 
Picture this: THEMA extracts valuable insights for companies, 
providing a clear lens through which to comprehend complex relationships 
within the financial sector. Our solution is not just a tool; it's a catalyst for 
informed decision-making. We invite you to explore and embrace the potential of 
THEMA in your financial analysis endeavors. 
Its versatility and effectiveness make it the go-to solution for 
navigating the complexities inherent in today's dynamic financial landscapes.
</p>
        <p class="ml-40 mt-8 text-black text-2xl mr-40"> 
Join us on a journey where data transforms into actionable intelligence, 
and THEMA becomes your guide in unlocking the true potential of your datasets.
 Welcome to a future where understanding intricate relationships is not just a 
 goal—it's your competitive advantage. </p>
      </div>
  <div class="text-center ml-40 mt-10 mb-20 text-black text-2xl mr-40">
    Welcome to <span class="text-[#b91c1c] font-bold">KRV ANALYTICS</span>.
  </div>
        </main>
      </div>
    );
  };
  
  export default About;