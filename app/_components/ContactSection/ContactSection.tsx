import React from "react";
import styles from "./ContactSection.module.css";
import { Section } from "@/components/layout";
import { GithubLink, LinkedInLink } from "@/components/ui";
import { ContactForm } from "@/features/contact/components";

export default function ContactSection() {
  return (
    <Section className={styles.contactSection}>
      <div className={styles.contactTextFrame}>
        <div className={styles.contactHeaderFrame}>
          <h2 className={styles.contactText}>{`Let's Stay in Touch`}</h2>
          <p className={styles.contactDescriptionText}>
            Whether you have a project idea or need a front-end developer, feel
            free to drop a message in the contact form.
          </p>
        </div>

        <div className={styles.socialFrame}>
          <h3 className={styles.socialText}>Social</h3>
          <div className={styles.socialListFrame}>
            <LinkedInLink size={38} />
            <GithubLink size={38} />
          </div>
        </div>
      </div>
      <ContactForm />
    </Section>
  );
}
