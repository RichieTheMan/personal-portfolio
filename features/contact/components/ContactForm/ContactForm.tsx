"use client";
import React from "react";
import styles from "./ContactForm.module.css";
import { MultilineInput, SubmitButton, TextInput } from "@/components/form";
import { BasicCard } from "@/components/ui";
import { delay } from "@/utils/delay";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { db } from "@/lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { SubmitedCard } from "../SubmitedCard";

const schema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name can't be longer than 50 letters"),
  email: z.email("Invalid Email").optional().or(z.literal("")),
  company: z
    .string()
    .max(50, "Company can't be longer than 50 letters")
    .optional()
    .or(z.literal("")),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(50, "Subject can't be longer than 50 letters"),
  message: z
    .string()
    .min(1, "Message is required")
    .max(320, "Message can't be longer than 320 letters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      isSubmitted,
      isSubmitSuccessful,
      isValid,
    },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    await delay(500);
    try {
      await addDoc(collection(db, "contact-submissions"), {
        data,
        timestamp: Timestamp.now(),
      });
      console.log(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form className={styles.formFrame} onSubmit={handleSubmit(onSubmit)}>
        {!isSubmitSuccessful && (
          <BasicCard className={styles.cardFrame}>
            <>
              <h3 className={styles.formText}>Contact</h3>
              <div
                className={`${styles.inputFrame} ${
                  isSubmitSuccessful && "hidden"
                }`}
              >
                <TextInput
                  {...register("name")}
                  label="Name"
                  placeholder="Your Name"
                  {...(isSubmitted && { error: errors.name?.message })}
                />
                <TextInput
                  {...register("email")}
                  label="Email (optional)"
                  placeholder="name@domain.com"
                  {...(isSubmitted && { error: errors.email?.message })}
                />
                <div className={styles.inputRow}>
                  <TextInput
                    {...register("company")}
                    label="Company (optional)"
                    placeholder="Company Name"
                    {...(isSubmitted && { error: errors.company?.message })}
                  />
                  <TextInput
                    {...register("subject")}
                    label="Subject"
                    placeholder="Subject"
                    {...(isSubmitted && { error: errors.subject?.message })}
                  />
                </div>
                <MultilineInput
                  {...register("message")}
                  placeholder="Your Message"
                  label="Message"
                  rows={5}
                  maxLength={320}
                  {...(isSubmitted && { error: errors.message?.message })}
                />
              </div>
              <SubmitButton
                text="Send"
                loading={isSubmitting}
                disabled={isSubmitted && !isValid}
              />
            </>
          </BasicCard>
        )}
        {isSubmitSuccessful && <SubmitedCard />}
      </form>
    </>
  );
}
