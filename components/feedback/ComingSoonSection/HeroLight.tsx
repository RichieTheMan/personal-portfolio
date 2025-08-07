import React from "react";
import styles from "./HeroLight.module.css";

export function HeroLight() {
  return (
    <div className={styles.heroLightFrame}>
      <div className={styles.lightMask}>
        <div className={styles.lightMainFrame} />
        <div className={styles.lightOverlayFrame} />
        <div className={styles.noiseMask}>
          <div className={styles.noiseFrame} />
        </div>
      </div>
    </div>
  );
}
