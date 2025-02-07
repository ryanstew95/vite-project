import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* Top Left Image */}
      <img className={styles.image1} src={getImageUrl("/kid.png")} alt="Kids eating pasta" />

<div className={styles.pastaContainer}>
      {/* Top Right Image */}
      <img className={styles.image2} src={getImageUrl("/pasta.png")} alt="Fresh pasta" />

      {/* Centered Title */}
      <h1 className={styles.title}>Taste of Italy</h1>
      </div>
      {/* Bottom Left Image */}
      <img className={styles.image3} src={getImageUrl("/wine.png")} alt="Pasta dinner with wine" />

      {/* Bottom Right Text */}
      <div className={styles.textContainer}>

    <div>
    <p className={styles.text1A}>Indulge in Italian</p>
      <p className={styles.text1B}>culinary treasures</p>
    </div>
<div>
      <p className={styles.text2A}>Experience the true</p>
      <p className={styles.text2B}>taste of Italy right here</p>
      </div>
      </div>
    </div>
  );
};
