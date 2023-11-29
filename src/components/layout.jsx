import Navbar from "./NavBar";
import Link from "next/link"

export default function Layout({ children}) {
  return (
    <>
      <Navbar/>
      <div className="content-center">
      {children}
      </div>
    </>
  );
}

