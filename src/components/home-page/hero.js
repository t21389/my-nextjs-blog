import Image from "next/image";
import styles from "./hero.module.css";

function Hero(props) {
  return (
    <section className={styles.hero}>
      <div>
        <Image
          className={styles.image}
          src="/images/site/hiten.png"
          width="300"
          height="300"
          alt="an image showing Hitman"
        />
      </div>
      <h1> Hi,I'm Hitman </h1>
      <p> I blog about web development - especially React, NextJs </p>
    </section>
  );
}

export default Hero;
