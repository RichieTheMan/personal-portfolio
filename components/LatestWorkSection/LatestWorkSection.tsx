import React from "react";
import "./styles.css";
import { GlassCard } from "../GlassCard";

export function LatestWorkSection() {
  return (
    <section title="Latest Work" className="latest-work-section">
      <h1 className="latest-work-text">Latest Work</h1>

      <div className="project-list-frame">
        <GlassCard className="project-frame">
          <div className="project-header-frame">
            <h2 className="project-header-text">
              Simplifying the Academic World
            </h2>
            <h3 className="project-type-text">Degree Final Year Project</h3>
          </div>
          <div className="project-role-list-frame">
            <span className="project-role-text">Mobile Dev</span>
            <div className="circle-divisor" />
            <span className="project-role-text">{`Mobile UI/UX`}</span>
          </div>
        </GlassCard>
        <div className="divisor" />
      </div>
    </section>
  );
}
