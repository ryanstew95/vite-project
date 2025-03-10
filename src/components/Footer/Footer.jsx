import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
return (
<section className={styles.contactForm}>
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

export default Footer;