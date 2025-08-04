import React from "react";
import styles from "./LatestWorkSection.module.css";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/ui";

export function FlowmarkProjectCard() {
  return (
    <Link href="/project/flowmark">
      <GlassCard className={styles.projectFrame}>
        <div className={styles.projectHeaderFrame}>
          <h3 className={styles.projectHeaderText}>
            Simplifying the Academic World
          </h3>
          <h4 className={styles.projectTypeText}>Degree Final Year Project</h4>
        </div>
        <div className={styles.projectRoleListFrame}>
          <span className={styles.projectRoleText}>Mobile Dev</span>
          <div className={styles.circleDivisor} />
          <span className={styles.projectRoleText}>{`Mobile UI/UX`}</span>
        </div>
        <Image
          src={"/assets/images/devices/iphone-12-pro-max-silver-portrait.png"}
          alt="Iphone Placeholder Image"
          width={515.646}
          height={1035.707}
          className={styles.iphoneImage}
        />
      </GlassCard>
    </Link>
  );
}
