// src/pages/ContactPage.js
import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import './ContactPage.css';

function ContactPage() {
  return (
    <section className="contact-page">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via the form below or through my social profiles.</p>
      <ContactForm />
    </section>
  );
}

export default ContactPage;
