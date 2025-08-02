import React from "react";
import "./styles.css";
import { GlassCard } from "../../wrappers/GlassCard";
import Image from "next/image";
import Link from "next/link";

export function FlowmarkProjectCard() {
  return (
    <Link href="/project/flowmark">
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
          width={515.646}
          height={1035.707}
          className="iphone-image"
        />
      </GlassCard>
    </Link>
  );
}
