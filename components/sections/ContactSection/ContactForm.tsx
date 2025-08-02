import React from "react";
import "./styles.css";
import { BasicCard } from "../../wrappers/BasicCard";
import { MultilineInput, TextInput } from "../../form/Input";
import { SubmitButton } from "../../form/SubmitButton";

export function ContactForm() {
  return (
    <form className="contact-form-frame">
      <BasicCard className="contact-form-inner-frame">
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
    </form>
  );
}
