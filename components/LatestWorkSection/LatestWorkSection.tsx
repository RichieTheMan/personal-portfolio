import React from "react";
import "./styles.css";
import { GlassCard } from "../GlassCard";
import Image from "next/image";

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
          <Image
            src={"/assets/images/devices/iphone-12-pro-max-silver-portrait.png"}
            alt="Iphone Placeholder Image"
            width={670.34}
            height={1346.42}
            className="iphone-image"
          />
        </GlassCard>
        <div className="divisor" />
      </div>
    </section>
  );
}
