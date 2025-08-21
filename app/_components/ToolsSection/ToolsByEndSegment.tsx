import React from "react";
import styles from "./ToolSegment.module.css";
import ToolCard from "./ToolCard";

export default function ToolsByEndSegment() {
  return (
    <div className={styles.toolsSegment}>
      <div className={styles.toolListFrame}>
        <h3 className={styles.toolListText}>Client-Side</h3>
        <div className={styles.toolsFrame}>
          <ToolCard iconName="html" />
          <ToolCard iconName="css" />
          <ToolCard iconName="javascript" />
          <ToolCard iconName="typescript" />
          <ToolCard iconName="react" />
          <ToolCard iconName="next" />
          <ToolCard iconName="tailwind" />
          <ToolCard iconName="bootstrap" />
        </div>
      </div>

      <div className={styles.toolListFrame}>
        <h3 className={styles.toolListText}>Server-Side</h3>
        <div className={styles.toolsFrame}>
          <ToolCard iconName="node" />
          <ToolCard iconName="firebase" />
        </div>
      </div>

      <div className={styles.toolListFrame}>
        <h3 className={styles.toolListText}>Dev-Ops & Deployment</h3>
        <div className={styles.toolsFrame}>
          <ToolCard iconName="vercel" />
          <ToolCard iconName="git" />
          <ToolCard iconName="github" />
          <ToolCard iconName="docker" />
          <ToolCard iconName="gitlab" />
        </div>
      </div>
    </div>
  );
}
