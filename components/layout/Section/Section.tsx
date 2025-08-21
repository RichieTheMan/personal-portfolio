import React from "react";

type SectionProps = {
  srHeader?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function Section({
  srHeader,
  className,
  children,
}: SectionProps) {
  return (
    <section className={className}>
      {srHeader && <h2 className="sr-only">{srHeader}</h2>}
      {children}
    </section>
  );
}
