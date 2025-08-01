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
  ...rest
}: SubmitButtonProps) {
  return (
    <button
      className={`submit-button-frame ${className}`}
      type="submit"
      {...rest}
    >
      {text}
    </button>
  );
}
