"use client";
import React, { ChangeEvent, useState } from "react";
import "./styles.css";

type BasicInputProps = {
  label: string;
  className?: string;
  error?: string;
};

export function BasicInput({
  label,
  className = "",
  error,
  ...rest
}: BasicInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="basic-input-frame">
      <label className="hidden">{label}</label>
      <input
        type="text"
        className="basic-input"
        value={value}
        placeholder={label}
        onChange={handleChange}
        {...rest}
      />
      {/* {error && <div className="">{error}</div>} */}
    </div>
  );
}
