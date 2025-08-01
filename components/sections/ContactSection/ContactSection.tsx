import React from "react";
import "./styles.css";
import { LinkedInIconLink } from "../../links/LinkedInIconLink";
import { MailIconLink } from "../../links/MailIconLink";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section title="Contact Me" className="contact-section">
      <div className="contact-text-frame">
        <div className="contact-header-frame">
          <h1 className="contact-text">{`Let's Stay in Touch`}</h1>
          <p className="contact-description-text">
            Whether you have a project idea or need a front-end developer, feel
            free to drop a message in the contact form.
          </p>
        </div>

        <div className="social-frame">
          <h2 className="social-text">Social</h2>
          <div className="social-list-frame">
            <LinkedInIconLink size={50} />
            <MailIconLink size={50} />
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
