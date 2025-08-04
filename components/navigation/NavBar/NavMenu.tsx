import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./NavMenu.module.css";
import { useNavbarContext } from "./NavbarContext";
import { ExternalLink, TextLink } from "@/components/ui";

export function NavMenu() {
  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);
  const { isNavMenuShowing, hideNavMenu } = useNavbarContext();

  useEffect(() => {
    const root = document.getElementById("modal-root");
    setModalRoot(root);
  }, []);

  if (!modalRoot) {
    return null;
  }

  return createPortal(
    <div
      className={isNavMenuShowing ? styles.NavMenu : `${styles.NavMenu} hidden`}
    >
      <button onClick={() => hideNavMenu()}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0" />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              d="M4 6H20M4 12H20M4 18H20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </button>
      <div className="gap-xxs column">
        <TextLink text="Work" href="/" />
        <TextLink text="Freelance" href="/freelance" />
        <TextLink text="About Me" href="/information" />
      </div>
      <div className="gap-xxs column">
        <ExternalLink text="LinkedIn" href="/" />
        <ExternalLink text="Github" href="/" />
      </div>
    </div>,
    modalRoot
  );
}
