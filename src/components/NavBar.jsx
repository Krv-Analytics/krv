import { useRouter } from "next/router";
import Link from "next/link";
import Logo from './logo'
import styles from "../../styles/navbar.module.css"
 
const navigationRoutes = ["home", "about", "contact"];
 
export default function Navbar() {
  // set router for client-navigation 
  const router = useRouter();
  return (
    <nav className={styles.nav_container}>
    
    <div className={styles.left_button}>
    <NavigationLink
      key={navigationRoutes[0]}
      href={`/${navigationRoutes[0]}`}
      text={<Logo scale={0.6}/>}
      router={router}
      className="left_button"
    />
    </div>
    <div className={styles.middle_button}>
      
        <NavigationLink
          key={navigationRoutes[1]}
          href={`/${navigationRoutes[1]}`}
          text="About"
          router={router}
          className="right_buttons"
        />
    
    </div>

    <div className={styles.right_button}>
      
      <NavigationLink
        key={navigationRoutes[2]}
        href={`/${navigationRoutes[2]}`}
        text="Contact"
        router={router}
        className="right_buttons"
      />
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