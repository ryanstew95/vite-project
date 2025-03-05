import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { getImageUrl } from "../../utils";

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
 <h2 className={styles.title}>Sunny Smiles</h2>
<hr />
<div className={styles.bottomSection}>
  <div className={styles.section}>
    <h3>123-456-7890</h3>
    <p>info@sunnysmiles.com</p>
  </div>
  <div className={styles.section}>
    <h3>500 Terry Francine Street,</h3>
    <p>6th Floor, San Francisco, CA, 94158</p>
  </div>
  <div className={styles.section}>
  <p>Follow Us</p>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
            </a>
            </div>            
  </div>
</div>

    </section>
  );
};

export default Contact;
