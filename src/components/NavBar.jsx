import { useRouter } from "next/router";
import Link from "next/link";
import Logo from './logo'
 

const current_page_color = "#b91c1c"
const other_page_color = "black"

  // Function to determine the color of each navigation item
  const getColorForNavItem = (navItem, pname) => {
    if(navItem === pname)
      return current_page_color
    else
      return other_page_color
  };

export default function Navbar() {
  // set router for client-navigation 
  const router = useRouter();
  const { pathname } = router;

  
  const isActive = router.asPath === ("/home")
  return (
  
  <nav className="h-35 shadow-lg sticky top-0 bg-gray-300 bg-graph">
    <div className="max-w-screen-xl flex items-center mx-auto h-20 justify-between ">
      <div className="h-35 w-35 lg:h-45">
        <Link href="/">
          <Logo color={getColorForNavItem("/", pathname)} />
        </Link>
      </div>
        <div className="h-30 w-50 lg:h-45">
          <NavigationLink key="about" href="/about" text="About" router={router} color={getColorForNavItem("/about", pathname)} />
        </div >
        <div className="h-30 w-50 lg:h-45">
          <NavigationLink key="projects" href="/projects" text="Projects" router={router} color={getColorForNavItem("/projects", pathname)}/>
        </div >
        <div className="h-30 w-50 lg:h-45">
          <NavigationLink key="team" href="/team" text="Meet the Team" router={router} color={getColorForNavItem("/team", pathname)}/>
        </div>
    </div>
</nav>


  );
}

// function to facilitate navigation between pages 
function NavigationLink({ href, text, router, color}) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    var linkClasses = ""
    if (color === "black")
      linkClasses = "text-3xl text-black " 
    else
      linkClasses = `text-3xl text-[${color}] font-bold`; 
    return (
      <Link className={linkClasses} href={href === "/home" ? "/" : href} passHref>   
        {text}
      </Link>
    );
  }
