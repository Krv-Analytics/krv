import { useRouter } from "next/router";
import Link from "next/link";
import Logo from './logo'
 
const navigationRoutes = ["home", "about", "contact"];
 
export default function Navbar() {
  // set router for client-navigation 
  const router = useRouter();
  const isActive = router.asPath === ("/home")
  return (

  <nav className="bg-[#2d2d2e00] h-10 shadow-lg">
  <div className="max-w-screen-xl flex items-center mx-auto h-10 justify-start">
    <div>
      <Link href="/">
        <Logo />
      </Link>
    </div>
    <div className="flex justify-start flex-grow">
      <div className="ml-0">
        <NavigationLink key="about" href="/about" text="About" router={router} />
      </div>
      <div className="ml-8">
        <NavigationLink key="projects" href="/projects" text="Projects" router={router} />
      </div>
    </div>
    <div>
      <NavigationLink key="team" href="/team" text="Meet the Team" router={router} />
    </div>
  </div>
</nav>


  );
}

// function to facilitate navigation between pages 
function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
      <Link className="text-lg text-black" href={href === "/home" ? "/" : href} passHref>
          {text}
      </Link>
    );
  }