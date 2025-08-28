"use client";
import React from "react";
import styles from "./HeroSection.module.css";
import { HeroLight } from "./HeroLight";
import { UnderDevTape } from "../../../components/feedback/UnderDevTape";
import { Section } from "@/components/layout";
import { useVisitContext } from "@/contexts";

export function HeroSection() {
  const { hasVisited } = useVisitContext();
  return (
    <>
      <HeroLight isLit={!hasVisited} />
      <Section className={styles.heroSection}>
        <UnderDevTape rotation={6} />
        <UnderDevTape rotation={-22} />
        <div className={styles.heroMainFrame}>
          <h2 className={styles.nameText}>Ricardo Sousa</h2>
          <h3
            className={
              !hasVisited ? styles.skillsTextLightFlicker : styles.skillsText
            }
          >
            Front-End Developer & Self-Taught Designer
          </h3>
        </div>

        <div className={styles.formerFrame}>
          <p className={styles.formerText}>Former student at</p>
          <img
            src="/assets/images/isla-logo.png"
            alt="ISLA Logo"
            className={styles.formerImage}
          />
        </div>
      </Section>
    </>
  );
}
