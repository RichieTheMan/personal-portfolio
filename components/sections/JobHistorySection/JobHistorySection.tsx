import React from "react";
import "./styles.css";
import { BasicCard } from "../../wrappers/BasicCard";

export function JobHistorySection() {
  return (
    <section title="Job History" className="job-history-section">
      <h1 className="hidden">Job History</h1>
      <BasicCard className="job-history-frame">
        <div className="job-frame">
          <span className="time-text">Current</span>
          <div className="status-content-frame">
            <p className="role-text">Working as mobile developer at</p>
            <a className="company-link">MobilePT</a>
          </div>
        </div>

        <div className="job-frame">
          <span className="time-text">Past</span>
          <div className="status-content-frame">
            <p className="role-text">Intern at</p>
            <a className="company-link">Facetrick</a>
          </div>
        </div>
      </BasicCard>
    </section>
  );
}
