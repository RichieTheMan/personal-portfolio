import React from "react";
import Image from "next/image";
import "./styles.css";
import { HeroLight } from "./HeroLight";
import { UnderDevTape } from "../../feedback/UnderDevTape";
import { Section } from "@/components/layout";

export function HeroSection() {
  return (
    <>
      <HeroLight />
      <UnderDevTape rotation={6} />
      <UnderDevTape rotation={-22} />
      <Section className="hero-section">
        <div className="hero-main-frame">
          <h2 className="name-text">Ricardo Sousa</h2>
          <h3 className="skills-text">
            Front-End Developer & Self-Taught Designer
          </h3>
        </div>

        <div className="former-frame">
          <p>Former student at</p>
          <Image
            src="/assets/images/isla-logo.png"
            alt="ISLA Logo"
            width={179.072}
            height={74.56}
          />
        </div>
      </Section>
    </>
  );
}
