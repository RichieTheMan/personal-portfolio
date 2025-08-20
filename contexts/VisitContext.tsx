"use client";
import { usePathname } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type VisitContextProps = {
  hasVisited: boolean;
  setHasVisited: React.Dispatch<React.SetStateAction<boolean>>;
};

const VisitContext = createContext<VisitContextProps>({
  hasVisited: false,
  setHasVisited: () => {},
});

export function VisitProvider({ children }: { children: React.ReactNode }) {
  const [hasVisited, setHasVisited] = useState<boolean>(false);

  const pathname = usePathname();
  useEffect(() => {
    if (pathname != "/") {
      setHasVisited(true);
    }
  }, [pathname]);

  return (
    <VisitContext.Provider value={{ hasVisited, setHasVisited }}>
      {children}
    </VisitContext.Provider>
  );
}

export const useVisitContext = () => {
  const { hasVisited, setHasVisited } = useContext(VisitContext);

  return { hasVisited };
};
