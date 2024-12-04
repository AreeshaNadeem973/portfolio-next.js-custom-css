import React from 'react';
import Link from 'next/link';
import styles from './Skills.module.css'; // Import custom CSS

const Skills = () => {
  return (
    <div id="skills" className={styles.skillsContainer}>
      <section className={styles.bodyFont}>
        <div className={styles.container}>
          <div className={styles.heading}>
            {/* Heading with underline */}
            <h2 className={styles.skillsHeading}>
              Skills
            </h2>
          </div>

          {/* Skills Section */}
          <div className={styles.skillsSection}>
            {/* Box 1 - HTML */}
            <div className={styles.skillBox}>
              <div className={styles.skillContent}>
                <div className={styles.iconBox}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.icon} viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className={styles.skillTitle}>HTML</h2>
                <p className={styles.skillDescription}>
                  Expertise in creating semantic, accessible, and well-structured websites using HTML.
                </p>
              </div>
            </div>

            {/* Box 2 - CSS & Tailwind CSS */}
            <div className={styles.skillBox}>
              <div className={styles.skillContent}>
                <div className={styles.iconBox}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.icon} viewBox="0 0 24 24">
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className={styles.skillTitle}>CSS & Tailwind CSS</h2>
                <p className={styles.skillDescription}>
                  Advanced skills in styling websites with CSS and rapid UI development using Tailwind CSS.
                </p>
              </div>
            </div>

            {/* Box 3 - TypeScript & Next.js */}
            <div className={styles.skillBox}>
              <div className={styles.skillContent}>
                <div className={styles.iconBox}>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className={styles.icon} viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </div>
                <h2 className={styles.skillTitle}>TypeScript & Next.js</h2>
                <p className={styles.skillDescription}>
                  Proficient in building dynamic, type-safe applications with TypeScript and modern web apps using Next.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
