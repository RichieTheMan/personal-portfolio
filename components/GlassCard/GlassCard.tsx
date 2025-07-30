import { HTMLAttributes, ReactNode } from "react";
import "./styles.css";

type GlassCardProps = {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export function GlassCard({
  children,
  className = "",
  style = {},
  ...rest
}: GlassCardProps) {
  return (
    <div className={`glass-card-frame ${className}`} style={style} {...rest}>
      {children}
    </div>
  );
}
