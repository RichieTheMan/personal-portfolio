import React from "react";
import styles from "./LookingForJobSection.module.css";
import { Section } from "@/components/layout";

export default function LookingForJobSection() {
  return (
    <Section className={styles.lookingForJobSection} srHeader="Looking for Job">
      <div className={styles.videoFrame}>
        <video width="500px" autoPlay muted loop playsInline>
          <source src="/assets/videos/logo-animation.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.textFrame}>
        <p className={styles.subText}>Currently</p>
        <div className={styles.mainTextFrame}>
          <p className={styles.mainText}>Open to Work</p>
          <div className={styles.pulse} />
        </div>
      </div>
    </Section>
  );
}
