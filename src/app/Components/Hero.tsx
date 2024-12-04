

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Hero.module.css'; // Import custom CSS

const Hero = () => {
  return (
    <div id="hero" className={styles.heroContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>
            <p>Hello, I&apos;m</p>
            <span className={styles.name}>Areesha Nadeem</span>
            <div className={styles.role}>Fronted Developer</div>
          </h1>
          <p className={styles.description}>
            I craft innovative web experiences with a passion for clean code
            and user-centric design. Whether building dynamic websites or
            scalable applications, I turn ideas into interactive, responsive
            solutions. Let&apos;s create something extraordinary together!
          </p>

          {/* Button with Link to Contact Section */}
          <Link href="#contact">
            <button className={styles.contactButton}>
              Let&apos;s Contact
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className={styles.imageContainer}>
          <Image
            src="/Image.jpeg"
            alt="Hero"
            width={192}
            height={200}
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
