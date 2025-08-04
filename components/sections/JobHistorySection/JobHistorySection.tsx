import React from "react";
import "./styles.css";
import { Section } from "@/components/layout";
import { BasicCard } from "@/components/wrappers/BasicCard";

export function JobHistorySection() {
  return (
    <Section className="job-history-section" srHeader="Job History">
      <BasicCard className="job-history-frame">
        <div className="job-frame">
          <h3 className="time-text">Current</h3>
          <div className="status-content-frame">
            <p className="role-text">Working as mobile developer at</p>
            <a className="company-link">MobilePT</a>
          </div>
        </div>

        <div className="job-frame">
          <h3 className="time-text">Past</h3>
          <div className="status-content-frame">
            <p className="role-text">Intern at</p>
            <a className="company-link">Facetrick</a>
          </div>
        </div>
      </BasicCard>
    </Section>
  );
}
