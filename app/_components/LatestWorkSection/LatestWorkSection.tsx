import React from "react";
import styles from "./LatestWorkSection.module.css";
import { FlowmarkProjectCard } from "./FlowmarkProjectCard";
import { Section } from "@/components/layout";
import { Divisor } from "@/components/ui";

export default function LatestWorkSection() {
  return (
    <Section className={styles.latestWorkSection}>
      <h2 className={styles.latestWorkText}>Latest Work</h2>

      <div className={styles.projectListFrame}>
        <FlowmarkProjectCard />
        <Divisor />
      </div>
    </Section>
  );
}
