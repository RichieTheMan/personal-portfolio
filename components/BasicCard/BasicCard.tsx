import { HTMLAttributes, ReactNode } from "react";
import "./styles.css";

type BasicCardProps = {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & HTMLAttributes<HTMLDivElement>;

export function BasicCard({
  children,
  className = "",
  style = {},
  ...props
}: BasicCardProps) {
  return (
    <div className={`basic-card-frame ${className}`} style={style} {...props}>
      {children}
    </div>
  );
}
