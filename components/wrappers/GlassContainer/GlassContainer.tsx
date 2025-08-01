import { HTMLAttributes, ReactNode } from "react";
import "./styles.css";

type GlassContainerProps = {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export function GlassContainer({
  children,
  className = "",
  style = {},
  ...props
}: GlassContainerProps) {
  return (
    <div
      className={`glass-container-frame ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}
