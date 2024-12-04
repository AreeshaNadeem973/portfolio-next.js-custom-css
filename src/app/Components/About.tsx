import React from 'react';
import Link from 'next/link';
import styles from './About.module.css'; // Importing the custom CSS

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <section className={styles.aboutSection}>
        <div className={styles.innerContainer}>

          {/* About Box 1: Introduction */}
          <div className={styles.aboutBox}>
            <div className={styles.textContainer}>
              <h1 className={styles.title}>About Me</h1>
              <p className={styles.description}>
                Hi, I&apos;m Areesha Nadeem, a passionate web developer from Karachi, currently studying BS Economics at Karachi University. 
                I specialize in HTML, CSS, TypeScript, and Next.js, building responsive and engaging websites.
                My focus is on mastering Next.js to deliver high-quality solutions. 
              </p>
              <Link href="#skills">
                <button className={styles.skillsButton}>
                  Skills
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
