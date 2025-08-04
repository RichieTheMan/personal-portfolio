import React from "react";
import "./styles.css";
import { ContactForm } from "./ContactForm";
import { LinkedInIconLink } from "@/components/links/LinkedInIconLink";
import { GithubLink } from "@/components/links/GithubLink";
import { Section } from "@/components/layout";

export function ContactSection() {
  return (
    <Section className="contact-section">
      <div className="contact-text-frame">
        <div className="contact-header-frame">
          <h2 className="contact-text">{`Let's Stay in Touch`}</h2>
          <p className="contact-description-text">
            Whether you have a project idea or need a front-end developer, feel
            free to drop a message in the contact form.
          </p>
        </div>

        <div className="social-frame">
          <h3 className="social-text">Social</h3>
          <div className="social-list-frame">
            <LinkedInIconLink size={38} />
            <GithubLink size={38} />
          </div>
        </div>
      </div>
      <ContactForm />
    </Section>
  );
}
