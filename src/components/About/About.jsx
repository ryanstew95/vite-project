import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.top}>
      <h2 className={styles.title}>Our story</h2>
            {/* pizza photo */}
            <img
        className={styles.imagePi}
        src={getImageUrl("/pizzza.png")}
        alt="pizza2"
      />
      </div>
      

      <div className={styles.who}>
        <div className={styles.story}>

       
      <p>Who we are</p>
      <h2>
      At Sunny Smiles, we are passionate about bringing the authentic flavors of Italy to your table. Our culinary journey began with a vision to create a warm and inviting space where people can enjoy traditional Italian dishes made with love and care. From handcrafted pastas to wood-fired pizzas, each dish reflects our commitment to quality and taste. Join us in celebrating the rich culinary heritage of Italy.
      </h2>
      </div>
      {/* pasta photo */}
      <img
        className={styles.imagePa}
        src={getImageUrl("/pastaAgain.png")}
        alt="pasta2"
      />
      </div>
 
     
    </section>
  );
};

export default About;
