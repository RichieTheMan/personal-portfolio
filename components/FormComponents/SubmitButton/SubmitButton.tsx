"use client";
import React from "react";
import "./styles.css";

type SubmitButtonProps = {
  text?: string;
  className?: string;
};

export function SubmitButton({
  text = "Submit",
  className = "",
  ...props
}: SubmitButtonProps) {
  return (
    <button
      className={`submit-button-frame ${className}`}
      type="submit"
      {...props}
    >
      {text}
    </button>
  );
}
