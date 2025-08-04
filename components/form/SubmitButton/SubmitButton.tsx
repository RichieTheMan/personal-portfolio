"use client";
import React from "react";
import styles from "./SubmitButton.module.css";

type SubmitButtonProps = {
  text?: string;
  className?: string;
};

export default function SubmitButton({
  text = "Submit",
  className = "",
  ...props
}: SubmitButtonProps) {
  return (
    <button
      className={`${styles.submitButtonFrame} ${className}`}
      type="submit"
      {...props}
    >
      {text}
    </button>
  );
}
