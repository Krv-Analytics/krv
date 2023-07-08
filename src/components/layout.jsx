import Navbar from "./NavBar";
import styles from '../../styles/layout.module.css';


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <hr className={styles.horizontalLine}/>
      <div className={styles.container}>
      {children}
      </div>
    </>
  );
}

