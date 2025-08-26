import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./NavMenu.module.css";
import { useNavbarContext } from "./NavbarContext";
import { GithubLink, GlassContainer, LinkedInLink } from "@/components/ui";
import { NavButton } from "./NavButton";

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
    isNavMenuShowing && (
      <div className={styles.navMenu}>
        <button onClick={hideNavMenu} className={styles.menuButton}>
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

        <GlassContainer className={styles.navRoutesFrame}>
          <NavButton text="Work" href="/" />
          <NavButton text="About" href="/information" />
        </GlassContainer>

        <div className={styles.navSocialsFrame}>
          <GlassContainer>
            <LinkedInLink size={20} />
          </GlassContainer>
          <GlassContainer>
            <GithubLink size={20} />
          </GlassContainer>
        </div>
      </div>
    ),
    modalRoot
  );
}
