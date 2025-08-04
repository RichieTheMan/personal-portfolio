"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./Input.module.css";

type TextInputProps = {
  label: string;
  className?: string;
  error?: string;
};

export default function TextInput({
  label,
  className = "",
  error,
  ...props
}: TextInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${styles.inputFrame} ${className}`}>
      <label className="sr-only">{label}</label>
      <input
        type="text"
        name={label.toLowerCase()}
        className={styles.textInput}
        value={value}
        placeholder={label}
        onChange={handleChange}
        {...props}
      />
      {error && <div className="">{error}</div>}
    </div>
  );
}
