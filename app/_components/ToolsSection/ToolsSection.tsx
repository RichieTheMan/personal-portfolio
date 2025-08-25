"use client";
import React, { useState } from "react";
import styles from "./ToolsSection.module.css";
import { Section } from "@/components/layout";
import ToolsByTypeSegment from "./ToolsByTypeSegment";
import OtherToolsSegment from "./OtherToolsSegment";
import ToolsByEndSegment from "./ToolsByEndSegment";
import GroupToggle from "./GroupToggle";
import BgGraphics from "./BgGraphics";

export default function ToolsSection() {
  const [isDefaultToggle, setIsDefaultToggle] = useState(true);

  return (
    <Section className={styles.toolsSection}>
      <div className={styles.headerFrame}>
        <h2 className={styles.toolsText}>My main Tools</h2>
        <GroupToggle
          isToggled={isDefaultToggle}
          setState={setIsDefaultToggle}
        />
      </div>
      <div className={styles.toolsFrame}>
        {!isDefaultToggle ? <ToolsByEndSegment /> : <ToolsByTypeSegment />}
        <OtherToolsSegment />
      </div>
      <BgGraphics />
    </Section>
  );
}
