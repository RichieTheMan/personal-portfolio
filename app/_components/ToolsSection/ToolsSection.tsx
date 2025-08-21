"use client";
import React, { useState } from "react";
import styles from "./ToolsSection.module.css";
import { Section } from "@/components/layout";
import ToolsByTypeSegment from "./ToolsByTypeSegment";
import OtherToolsSegment from "./OtherToolsSegment";
import ToolsByEndSegment from "./ToolsByEndSegment";

export default function ToolsSection() {
  const [isDefaultToggle, setIsDefaultToggle] = useState(true);

  return (
    <Section className={styles.toolsSection}>
      <div className={styles.headerFrame}>
        <h2 className={styles.toolsText}>My main Tools</h2>
        <div className={styles.toggleFrame}>
          <button
            className={
              !isDefaultToggle ? styles.toggleButtonActive : styles.toggleButton
            }
            onClick={() => setIsDefaultToggle(false)}
          >
            By End
          </button>
          <span className={styles.toggleDivisor}>{`/`}</span>
          <button
            className={
              isDefaultToggle ? styles.toggleButtonActive : styles.toggleButton
            }
            onClick={() => setIsDefaultToggle(true)}
          >
            By Type
          </button>
        </div>
      </div>
      <div className={styles.toolsFrame}>
        {!isDefaultToggle ? <ToolsByEndSegment /> : <ToolsByTypeSegment />}
        <OtherToolsSegment />
      </div>
    </Section>
  );
}
