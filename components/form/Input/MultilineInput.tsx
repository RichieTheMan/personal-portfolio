"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./Input.module.css";

type MultilineInputProps = {
  label: string;
  className?: string;
  error?: string;
  rows?: number;
  length?: number;
};

export default function MultilineInput({
  label,
  className = "",
  error,
  rows = 20,
  length = 999,
  ...props
}: MultilineInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={`${styles.inputFrame} ${className}`}>
      <label className="sr-only">{label}</label>
      <textarea
        rows={rows}
        className={styles.textInput}
        name={label.toLowerCase()}
        value={value}
        maxLength={length}
        placeholder={`${label} (max: ${length} letters)`}
        onChange={handleChange}
        {...props}
      />
      {error && <div className="">{error}</div>}
    </div>
  );
}
