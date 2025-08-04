import React from "react";
import styles from "./ContactForm.module.css";
import { MultilineInput, SubmitButton, TextInput } from "@/components/form";
import { BasicCard } from "@/components/ui";

export default function ContactForm() {
  return (
    <form className={styles.contactFormFrame}>
      <BasicCard className={styles.contactFormInnerFrame}>
        <h3 className={styles.contactFormText}>Contact</h3>
        <div className={styles.contactInputFrame}>
          <TextInput label="Name" />
          <TextInput label="Email" />
          <div className={styles.contactInputRow}>
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
