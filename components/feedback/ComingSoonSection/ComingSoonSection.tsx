import React from "react";
import styles from "./ComingSoonSection.module.css";
import { HeroLight } from "./HeroLight";
import { Section } from "@/components/layout";

export default function ComingSoonSection() {
  return (
    <>
      <HeroLight />
      <Section className={styles.comingSoonSection}>
        <h2 className={styles.comingSoonText}>Coming Soon</h2>
      </Section>
    </>
  );
}
