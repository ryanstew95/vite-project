import React from "react";
import styles from "./Menu.module.css";
import { getImageUrl } from "../../utils";
import Footer from "../Footer/Footer";

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
{/* mains */}
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
<div className={styles.food}>
      <div>
    {/* schnitzel */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/schnitzel.png")}
        alt="schnitzel"
      />
<p>Schnitzel</p>
<h2>Crisp and golden on the outside, in a herb and parmesan crumb.</h2>
<h2>$4.00</h2>
</div>
<div>
    {/* steak */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/steak.png")}
        alt="Peanut crusted steak"
      />
<p>Peanut crusted steak</p>
<h2>Juicy, tender steak cooked to your liking, served with steamed vegetables.</h2>
<h2>$8.50</h2>

</div>
<div>
    {/* tofu */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/tofu.png")}
        alt="Tofu skewers"
      />
<p>Tofu skewers</p>
<h2>Grilled tofu skewers, marinated in a blead of soy and sesame with seasonal roast vegetables.</h2>
<h2>$8.00</h2>
</div>
</div>



{/* desserts */}
<hr></hr>
    <div className={styles.menuTitle}>
      <h3 className={styles.subTitle}>Desserts</h3>
      <p className={styles.subDescription}>Our desserts are made in house by our pastry chef.</p>
      </div>
    <hr></hr>
    <div className={styles.food}>
      <div>
    {/* carrot */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/carrot.png")}
        alt="carrot cake"
      />
<p>Carrot cake</p>
<h2>Lighty spiced carrot cake layered with cream cheese frosting.</h2>
<h2>$5.50</h2>
</div>
<div>
    {/* cake */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/cake.png")}
        alt="cake"
      />
<p>Classic cheesecake</p>
<h2>Topped with a layer of raspberry jam & sliced strawberries.</h2>
<h2>$6.50</h2>

</div>
<div>
    {/* mousse */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/mousse.png")}
        alt="mousse"
      />
<p>Chocolate mousse</p>
<h2>Our delicate, yet rich signature chocolate mousse dessert.</h2>
<h2>Single $4.00</h2>
<h2>Double $7.00</h2>
</div>
</div>
<div className={styles.food}>
      <div>
    {/* brownie */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/brownie.png")}
        alt="brownie"
      />
<p>Brownie</p>
<h2>Crisp and golden on the outside, in a herb and parmesan crumb.</h2>
<h2>$5.00</h2>
</div>
<div>
    {/* icecream */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/icecream.png")}
        alt="ice cream"
      />
<p>Sticky date & ice cream</p>
<h2>Served with vanilla ice cream, toffee sauce & a peanut crumble.</h2>
<h2>$6.00</h2>

</div>
<div>
    {/* pie */}
    <img
        className={styles.menuImages}
        src={getImageUrl("/pie.png")}
        alt="lemon pie"
      />
<p>Lemon meringue pie</p>
<h2>Zesty lemon meringue, a pistachio crumble, served with a chantilly cream.</h2>
<h2>$5.50</h2>
</div>
</div>
<div>
  <hr></hr>
  <h3 className={styles.subTitle}>Drinks</h3>
  <hr></hr>
</div>
<div className={styles.food}>
  <div>
  <p>Healthy smoothie</p>
<h2>Nourish your body with our selection of healthy smoothies.</h2>
<h2>$3.00</h2>
  </div>
  <div>
  <p>Fresh juice</p>
<h2>A refreshing blend of freshly squeezed orange, watermelon, carrot, and ginger.</h2>
<h2>Small$2.00</h2>
<h2>Medium $3.00</h2>
<h2>Large $4.00</h2>
  </div>
  <div>
  <p>Wine</p>
<h2>Choice of red, white or rose.</h2>
<h2>$2.00</h2>
  </div>
</div>
<Footer />
    </div>;
};

export default Menu;
