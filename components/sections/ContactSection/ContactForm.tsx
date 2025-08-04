import React from "react";
import "./styles.css";
import { MultilineInput, SubmitButton, TextInput } from "@/components/form";
import { BasicCard } from "@/components/ui";

export function ContactForm() {
  return (
    <form className="contact-form-frame">
      <BasicCard className="contact-form-inner-frame">
        <h3 className="contact-form-text">Contact</h3>
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
