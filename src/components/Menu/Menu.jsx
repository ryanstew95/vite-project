import React from "react";
import styles from "./Menu.module.css";
import { getImageUrl } from "../../utils";

const Menu = () => {
  return <div className={styles.menu}>
    <h2 className={styles.title}>Dinner Menu</h2>
    <hr></hr>
    <div className={styles.menuTitle}>
      <h3 className={styles.subTitle}>Appetizers</h3>
      <p className={styles.subDescription}>These dishes are great for sharing.</p>
      </div>
    <hr></hr>
    <div className={styles.food}>
      <div>
    {/* bread */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/bread.png")}
        alt="bread app"
      />
<p>Bread & dips</p>
<h2>Sourdough bread accompanied by hummus, beetroot & whipped feta dips.</h2>
<h2>$4.50</h2>
</div>
<div>
    {/* salad */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/salad.png")}
        alt="salad app"
      />
<p>Green salad</p>
<h2>A garden-fresh salad with seasonal greens and roasted almonds.</h2>
<h2>Small $3.50</h2>
<h2>Medium $5.50</h2>
</div>
<div>
    {/* tuna */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/tuna.png")}
        alt="tuna app"
      />
<p>Tuna sashimi</p>
<h2>Seared fresh tuna, fresh herbs, and a touch of chill.</h2>
<h2>$4.50</h2>
</div>
</div>
<hr></hr>
    <div className={styles.menuTitle}>
      <h3 className={styles.subTitle}>Mains</h3>
      <p className={styles.subDescription}>A diverse range of flavorful dishes which are all sourced daily and locally.</p>
      </div>
    <hr></hr>
    <div className={styles.food}>
      <div>
    {/* burger */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/burger.png")}
        alt="burger"
      />
<p>Cheese burger</p>
<h2>Our classic burger with lettuce, pickles, heirloom tomatoes, served with a side of fries.</h2>
<h2>Mushroom $7.00</h2>
<h2>Chicken $7.50</h2>
<h2>Beef $9.00</h2>
</div>
<div>
    {/* fish */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/fish.png")}
        alt="fish"
      />
<p>Fish of the day</p>
<h2>Fresh catch of the day paired with asparagus & a cream of sweet potato.</h2>
<h2>$8.00</h2>

</div>
<div>
    {/* ravioli */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/ravioli.png")}
        alt="ravioli"
      />
<p>Hand-made ravioli</p>
<h2>Artisanal hand-made ravioli, filled with a blend of cheeses in a basil pesto sauce.</h2>
<h2>$6.50</h2>
</div>
</div>
    </div>;
};

export default Menu;
