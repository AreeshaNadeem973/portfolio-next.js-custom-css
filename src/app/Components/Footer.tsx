import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';  // Correct import after installation
import styles from './Footer.module.css'; // Import custom CSS correctly

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.connectText}>Connect with me:</p>
        <div className={styles.socialIcons}>
          <a
            href="https://github.com/your-profile"  // Replace with your actual GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile"  // Replace with your actual LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin size={30} />
          </a>
        </div>
        <p className={styles.copyText}>
          &copy; {new Date().getFullYear()} Your Name  // Replace with your actual name
        </p>
      </div>
    </footer>
  );
};

export default Footer;
