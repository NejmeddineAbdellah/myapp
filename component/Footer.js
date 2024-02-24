// Footer.js
import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
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
