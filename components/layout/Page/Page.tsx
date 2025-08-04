import React from "react";

type PageProps = {
  pageSrHeader: string;
  children: React.ReactNode;
};

export default function Page({ pageSrHeader, children }: PageProps) {
  return (
    <>
      <h1 className="sr-only">{pageSrHeader}</h1>
      {children}
    </>
  );
}
