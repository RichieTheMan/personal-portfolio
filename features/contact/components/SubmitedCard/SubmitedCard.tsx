"use client";
import React from "react";
import styles from "./SubmitedCard.module.css";
import { BasicCard, Icon } from "@/components/ui";
import Image from "next/image";

export default function SubmitedCard() {
  return (
    <BasicCard className={styles.cardFrame}>
      <Icon iconName="check" fill="#40AE47" size={120} />
      <h3 className={styles.titleText}>Message Sent</h3>
      <p className={styles.subText}>
        I will check your message as soon as possible. Thank you!
      </p>

      <img className={styles.shadeImage} src="/assets/svgs/wave.svg" />
    </BasicCard>
  );
}
