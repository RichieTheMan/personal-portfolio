import React from "react";
import styles from "./ToolsSection.module.css";
import { Section } from "@/components/layout";
import { BasicCard, GlassContainer, Icon } from "@/components/ui";
import ToolCard from "./ToolCard";
import ToolsByTypeSegment from "./ToolsByTypeSegment";
import OtherToolsSegment from "./OtherToolsSegment";
import ToolsByEndSegment from "./ToolsByEndSegment";

export default function ToolsSection() {
  return (
    <Section className={styles.toolsSection}>
      <div className={styles.headerFrame}>
        <h2 className={styles.toolsText}>My main Tools</h2>
        <div className={styles.toggleFrame}>
          <span className={styles.toggleButton}>By End</span>
          <span className={styles.toggleDivisor}>{`/`}</span>
          <span className={styles.toggleButtonActive}>By Type</span>
        </div>
      </div>
      <div className={styles.toolsFrame}>
        {/* <ToolsByEndSegment /> */}
        <ToolsByTypeSegment />
        <OtherToolsSegment />
      </div>
    </Section>
  );
}
