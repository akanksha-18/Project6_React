import React from 'react';
import styles from './ContactUs.module.css'; 

function ContactUs() {
  return (
    <div className={styles.contactContainer}>
      <h2>Contact Us</h2>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
