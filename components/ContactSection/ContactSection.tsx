import React from "react";
import "./styles.css";
import { BasicCard } from "../BasicCard";
import { LinkedInIconLink } from "../LinkedInIconLink";
import { MailIconLink } from "../MailIconLink";
import { MultilineInput, TextInput } from "../FormComponents/Input";
import { SubmitButton } from "../FormComponents/SubmitButton";

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
      <BasicCard className="contact-form-frame">
        <h2 className="contact-form-text">Contact</h2>
        <div className="contact-input-frame">
          <TextInput label="Name" />
          <TextInput label="Email" />
          <div className="contact-input-row">
            <TextInput label="Company" />
            <TextInput label="Subject" />
          </div>
          <MultilineInput label="Message" rows={7} length={320} />
        </div>
        <SubmitButton text="Send" />
      </BasicCard>
    </section>
  );
}
