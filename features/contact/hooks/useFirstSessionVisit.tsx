import { useEffect, useState } from "react";

export default function useFirstSessionVisit(key = "hasVisited") {
  const [isFirstVisit, setIsFirstVisit] = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem(key);

    if (!hasVisited) {
      sessionStorage.setItem(key, "true");
      setIsFirstVisit(true);
    }
  }, [key]);

  return isFirstVisit;
}
