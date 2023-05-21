import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact US</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We'd love to hear from <span> from you </span>
          </h2>

          <ContactForm />
        </section>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23317.17292152098!2d-79.9499108!3d43.069899400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c8d111e300985%3A0x56dca00405cb2d0c!2sCaledonia%2C%20ON!5e0!3m2!1sen!2sca!4v1684604251489!5m2!1sen!2sca"
        width={100}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
