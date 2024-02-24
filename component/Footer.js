import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGoogle, faLinkedin, faSkype } from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={styles.footer}>
       <div className={styles.socialMedia}>
        <a href="#">
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} size="3x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faGoogle} size="3x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLinkedin} size="4x" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faSkype} size="4x" />
        </a>
      </div>
      <div className={styles.contactForm}>
        <form onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div className={styles.contactDetails}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className={styles.messageForm}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
