import React from "react";
import styles from "./Contact.module.css";

import { getImageUrl } from "../../utils";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Connect with Us</h2>
<hr></hr>
      <div className={styles.photoContainer}>
      <img
        className={styles.image1}
        src={getImageUrl("/food1.png")}
        alt="photo of food1"
      />
        <img
        className={styles.image2}
        src={getImageUrl("/food2.png")}
        alt="photo of food2"
      />
        <img
        className={styles.image3}
        src={getImageUrl("/food3.png")}
        alt="photo of food3"
      />
        <img
        className={styles.image4}
        src={getImageUrl("/food4.png")}
        alt="photo of food4"
      />
        <img
        className={styles.image5}
        src={getImageUrl("/food5.png")}
        alt="photo of food5"
      />
        <img
        className={styles.image6}
        src={getImageUrl("/photo.png")}
        alt="photo of place"
      />
 </div>

<Footer />



    </section>
  );
};

export default Contact;
