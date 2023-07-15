import { useRouter } from "next/router";
import Link from "next/link";
import Logo from './logo'
import styles from "../../styles/navbar.module.css"
 
const navigationRoutes = ["home", "about", "contact"];
 
export default function Navbar() {
  // set router for client-navigation 
  const router = useRouter();
  return (
  //   <nav className={styles.nav_container}>
    
  //   <div className={styles.left_button}>
  //   <NavigationLink
  //     key={navigationRoutes[0]}
  //     href={`/${navigationRoutes[0]}`}
  //     text={<Logo scale={0.6}/>}
  //     router={router}
  //     className="left_button"
  //   />
  //   </div>
  //   <div className={styles.middle_button}>
      
  //       <NavigationLink
  //         key={navigationRoutes[1]}
  //         href={`/${navigationRoutes[1]}`}
  //         text="About"
  //         router={router}
  //         className="right_buttons"
  //       />
    
  //   </div>

  //   <div className={styles.right_button}>
      
  //     <NavigationLink
  //       key={navigationRoutes[2]}
  //       href={`/${navigationRoutes[2]}`}
  //       text="Contact"
  //       router={router}
  //       className="right_buttons"
  //     />
  // </div>
  // </nav>


  <nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Logo class="w-5 h-5" />

    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"/>
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        </div>
        </nav>

  );
}

// function to facilitate navigation between pages 
function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
      <Link href={href === "/home" ? "/" : href} passHref>
          {text}
      </Link>
    );
  }