import { HTMLAttributes, ReactNode } from "react";

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
  const defaultStyle: React.CSSProperties = {
    borderRadius: "999px",
    border: "1px solid var(--grey)",
    padding: "var(--tiny) var(--tiny)",
    backgroundColor: "var(--grey-10)",
    boxShadow: "inset 0 0 10px var(--grey), 0 4px 24px hsla(0, 0%, 0%, 0.25)",
    backdropFilter: "blur(40px)",
    display: "flex",
    gap: "var(--tiny)",
    ...style,
  };

  return (
    <div className={className} style={defaultStyle} {...rest}>
      {children}
    </div>
  );
}
