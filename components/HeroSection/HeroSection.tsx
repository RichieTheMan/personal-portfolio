import React from "react";
import Image from "next/image";
import "./styles.css";
import { HeroLight } from "./HeroLight";

export function HeroSection() {
  return (
    <>
      <HeroLight />
      <section title="Hero Section" className="hero-section">
        <h1 className="hidden">{`Ricardo Sousa's Web Portfolio`}</h1>

        <div className="hero-main-frame">
          <h2 className="name-text">Ricardo Sousa</h2>
          <h2 className="skills-text">
            Front-End Developer & Self-Taught Designer
          </h2>
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
    </>
  );
}
