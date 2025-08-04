import React from "react";
import "./styles.css";
import { FlowmarkProjectCard } from "./FlowmarkProjectCard";
import { Section } from "@/components/layout";
import { Divisor } from "@/components/ui";

export function LatestWorkSection() {
  return (
    <Section className="latest-work-section">
      <h2 className="latest-work-text">Latest Work</h2>

      <div className="project-list-frame">
        <FlowmarkProjectCard />
        <Divisor />
      </div>
    </Section>
  );
}
