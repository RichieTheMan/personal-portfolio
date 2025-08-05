"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./ContactForm.module.css";
import { MultilineInput, SubmitButton, TextInput } from "@/components/form";
import { BasicCard } from "@/components/ui";

import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

type FormData = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "contact-submissions"), {
        ...formData,
        timestamp: Timestamp.now(),
      });
      setStatus("✅ Message sent!");
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("❌ Failed to send message.");
    }
  };
  return (
    <form className={styles.contactFormFrame} onSubmit={handleSubmit}>
      <BasicCard className={styles.contactFormInnerFrame}>
        <h3 className={styles.contactFormText}>Contact</h3>
        <div className={styles.contactInputFrame}>
          <TextInput
            label="Name"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <TextInput
            label="Email"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <div className={styles.contactInputRow}>
            <TextInput
              label="Company"
              required
              onChange={handleChange}
              value={formData.company}
            />
            <TextInput
              label="Subject"
              required
              onChange={handleChange}
              value={formData.subject}
            />
          </div>
          <MultilineInput label="Message" rows={7} maxLength={320} />
        </div>
        <SubmitButton text="Send" />
        {status && <p>{status}</p>}
      </BasicCard>
    </form>
  );
}
