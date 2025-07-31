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
  ...rest
}: GlassContainerProps) {
  return (
    <div
      className={`glass-container-frame ${className}`}
      style={style}
      {...rest}
    >
      {children}
    </div>
  );
}
