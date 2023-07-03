import Navbar from "./NavBar";
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      {/* Footer */}
      {/* You can add more things here  */}
    </>
  );
}

