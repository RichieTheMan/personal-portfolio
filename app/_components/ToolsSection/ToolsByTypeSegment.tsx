import React from "react";
import styles from "./ToolSegment.module.css";
import ToolCard from "./ToolCard";

export default function ToolsByTypeSegment() {
  return (
    <div className={styles.toolsSegment}>
      <div className={styles.toolListFrame}>
        <h3 className={styles.toolListText}>Languages</h3>
        <div className={styles.toolsFrame}>
          <ToolCard iconName="html" />
          <ToolCard iconName="css" />
          <ToolCard iconName="javascript" />
          <ToolCard iconName="typescript" />
        </div>
      </div>

      <div className={styles.toolListFrame}>
        <h3 className={styles.toolListText}>Frameworks & Libraries</h3>
        <div className={styles.toolsFrame}>
          <ToolCard iconName="react" />
          <ToolCard iconName="next" />
          <ToolCard iconName="node" />
          <ToolCard iconName="tailwind" secondary />
          <ToolCard iconName="bootstrap" secondary />
        </div>
      </div>

      <div className={styles.toolListFrame}>
        <h3 className={styles.toolListText}>Services</h3>
        <div className={styles.toolsFrame}>
          <ToolCard iconName="vercel" />
          <ToolCard iconName="firebase" />
          <ToolCard iconName="docker" />
        </div>
      </div>

      <div className={styles.toolListFrame}>
        <h3 className={styles.toolListText}>Version Control</h3>
        <div className={styles.toolsFrame}>
          <ToolCard iconName="git" />
          <ToolCard iconName="github" />
          <ToolCard iconName="gitlab" secondary />
        </div>
      </div>
    </div>
  );
}
