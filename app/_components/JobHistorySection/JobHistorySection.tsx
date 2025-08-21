import React from "react";
import styles from "./JobHistorySection.module.css";
import { Section } from "@/components/layout";
import { BasicCard } from "@/components/ui";

export default function JobHistorySection() {
  return (
    <Section className={styles.jobHistorySection} srHeader="Job History">
      <BasicCard className={styles.jobHistoryFrame}>
        <div className={styles.jobFrame}>
          <h3 className={styles.timeText}>Current</h3>
          <div className={styles.statusContentFrame}>
            <p className={styles.roleText}>Working as mobile developer at</p>
            <a className={styles.companyLink}>MobilePT</a>
          </div>
        </div>

        <div className={styles.jobFrame}>
          <h3 className={styles.timeText}>Past</h3>
          <div className={styles.statusContentFrame}>
            <p className={styles.roleText}>Intern at</p>
            <a className={styles.companyLink}>Facetrick</a>
          </div>
        </div>
      </BasicCard>
    </Section>
  );
}
