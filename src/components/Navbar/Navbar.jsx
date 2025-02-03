import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">Sunny Smiles</a>
    <div className={styles.menu}>
      <ul className={styles.menuItems}>
        <li>
        <a href="/">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="/menu">Menu</a>
        </li>
      </ul>
    </div>
  </nav>
    )
};