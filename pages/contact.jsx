// pages/contact.js
import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div>
          <label className={styles.label} htmlFor="fullName">Full Name:</label>
          <input
            className={styles.inputField}
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="email">Email:</label>
          <input
            className={styles.inputField}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="message">Message:</label>
          <textarea
            className={styles.textareaField}
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message here"
            required
          ></textarea>
        </div>
        <button className={styles.submitButton} type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
