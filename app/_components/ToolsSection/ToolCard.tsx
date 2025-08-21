import React from "react";
import styles from "./ToolCard.module.css";
import { BasicCard, GlassContainer, Icon, IconProps } from "@/components/ui";
import { IconName } from "@/components/ui/Icon";

type ToolCardProps = {
  iconName: IconName;
  customToolName?: string;
  secondary?: boolean;
};

export default function ToolCard({
  iconName,
  customToolName = iconName,
  secondary = false,
}: ToolCardProps) {
  return (
    <GlassContainer className={styles.toolCardContainer}>
      <BasicCard className={styles.toolCard}>
        <Icon size={32} iconName={iconName} />
        <span className={styles.toolNameText}>{customToolName}</span>
      </BasicCard>
    </GlassContainer>
  );
}
