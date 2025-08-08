"use client";
import React from "react";
import styles from "./HeroLight.module.css";

type HeroLightProps = {
  isLit: boolean;
};

export function HeroLight({ isLit }: HeroLightProps) {
  return (
    <div className={isLit ? styles.lightFrameLightUp : styles.lightFrame}>
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
