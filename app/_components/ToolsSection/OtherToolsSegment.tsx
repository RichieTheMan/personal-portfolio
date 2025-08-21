import React from "react";
import styles from "./ToolSegment.module.css";
import ToolCard from "./ToolCard";

export default function OtherToolsSegment() {
  return (
    <div className={styles.toolsSegment}>
      <div className={styles.toolListFrame}>
        <h3 className={styles.toolListText}>Mobile</h3>
        <div className={styles.toolsFrame}>
          <ToolCard iconName="react" customToolName="react native" />
          <ToolCard iconName="expo" />
        </div>
      </div>

      <div className={styles.toolListFrame}>
        <h3 className={styles.toolListText}>Creativity & Design</h3>
        <div className={styles.toolsFrame}>
          <ToolCard iconName="figma" />
          <ToolCard iconName="inkscape" />
          <ToolCard iconName="gimp" />
          <ToolCard iconName="blender" secondary />
        </div>
      </div>
    </div>
  );
}
