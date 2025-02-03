import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
      <img
          className={styles.logo}
          src={
       
            getImageUrl("/sslogo.png")
          }
        
        />
      <a className={styles.title} href="/">
        Sunny Smiles
      </a>
      </div>
      
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("/closeIcon.png")
              : getImageUrl("/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
          <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};