import Navbar from "./NavBar";
import Link from "next/link"

export default function Layout({ children}) {
  return (
    <>
      <Navbar/>
      <div className="content-center">
      {children}
      </div>
      <footer class=" text-center text-black">
        More Coming Soon! 
      </footer>
    </>
  );
}

