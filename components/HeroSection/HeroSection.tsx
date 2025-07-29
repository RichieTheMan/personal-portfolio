import React from "react";
import Image from "next/image";
import "./styles.css";

export function HeroSection() {
  return (
    <section className="hero-section">
      <h1 className="hidden">Ricardo Sousa's Web Portfolio</h1>

      <div className="hero-main-frame">
        <div className="name-frame">
          <span className="name-text">Ricardo Sousa</span>
          <span className="name-text">Ricardo Sousa</span>
        </div>
        <h1 className="skills-text">
          Front-End Developer & Self-Taught Designer
        </h1>
      </div>

      <div className="former-frame">
        <p>Former student at</p>
        <Image
          src="/assets/images/isla-logo.png"
          alt="ISLA Logo"
          width={223.84}
          height={93.2}
        />
      </div>
    </section>
  );
}
