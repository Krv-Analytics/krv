import { useRouter } from "next/router";
import Link from "next/link";
import Logo from './logo'
 
const navigationRoutes = ["home", "about", "team"];
 
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="nav_container">
    <NavigationLink
      key={navigationRoutes[0]}
      href={`/${navigationRoutes[0]}`}
      text={<Logo scale={0.5}/>}
      router={router}
      className="left_button"
    />
    <div className="right_buttons">
      {navigationRoutes.slice(1).map((singleRoute) => (
        <NavigationLink
          key={singleRoute}
          href={`/${singleRoute}`}
          text={singleRoute}
          router={router}
          className="navigation_link"
        />
      ))}
    </div>
  </nav>
  );
}

function NavigationLink({ href, text, router }) {
    const isActive = router.asPath === (href === "/home" ? "/" : href);
    return (
      <Link href={href === "/home" ? "/" : href} passHref>
          {text}
      </Link>
    );
  }