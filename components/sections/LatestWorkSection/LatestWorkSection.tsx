import React from "react";
import "./styles.css";
import { FlowmarkProjectCard } from "./FlowmarkProjectCard";

export function LatestWorkSection() {
  return (
    <section title="Latest Work" className="latest-work-section">
      <h1 className="latest-work-text">Latest Work</h1>

      <div className="project-list-frame">
        <FlowmarkProjectCard />
        <div className="divisor" />
      </div>
    </section>
  );
}
