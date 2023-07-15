import Navbar from "./NavBar";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="content-center">
      {children}
      </div>
    </>
  );
}

