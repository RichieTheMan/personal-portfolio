"use client";
import React, { ChangeEvent, useState } from "react";
import "./styles.css";

type TextInputProps = {
  label: string;
  className?: string;
  error?: string;
};

export function TextInput({
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
    <div className={`input-frame ${className}`}>
      <label className="hidden">{label}</label>
      <input
        type="text"
        name={label.toLowerCase()}
        className="text-input"
        value={value}
        placeholder={label}
        onChange={handleChange}
        {...props}
      />
      {error && <div className="">{error}</div>}
    </div>
  );
}
