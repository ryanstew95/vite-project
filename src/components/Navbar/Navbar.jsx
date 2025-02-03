import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">Sunny Smiles</a>
    <div className={styles.menu}>
      <img className={styles.menuBtn} src={getImageUrl("menuIcon.png")} 
      alt="menu-button"/>
      <ul className={styles.menuItems}>
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
    )
};