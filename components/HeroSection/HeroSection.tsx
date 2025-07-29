import React from "react";
import Image from "next/image";
import "./styles.css";

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-main">
        <div style={{ position: "relative", marginBottom: "var(--xl)" }}>
          <h1 className="name hero-heading">Ricardo Sousa</h1>
          <h1 className="name hero-heading">Ricardo Sousa</h1>
        </div>
        <h1 className="hero-heading">
          Front-End Developer & Self-Taught Designer
        </h1>
      </div>

      <div className="hero-secondary">
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
