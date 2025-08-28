import React, { useRef } from "react";
import styles from "./NavMenu.module.css";
import { GithubLink, GlassContainer, LinkedInLink } from "@/components/ui";
import { NavButton } from "./NavButton";

type NavMenuProps = {
  isOpen: boolean;
};

export function NavMenu({ isOpen }: NavMenuProps) {
  const hasOpenedRef = useRef(isOpen);

  if (isOpen) hasOpenedRef.current = true;

  const slideOutStyle = hasOpenedRef.current && !isOpen && styles.slideOut;
  const slideInStyle = isOpen && styles.slideIn;

  const navRoutesStyle = `${styles.navRoutesFrame} ${slideInStyle} ${slideOutStyle}`;
  const navSocialsStyle = `${styles.navSocialsFrame} ${slideInStyle} ${slideOutStyle}`;

  return (
    <div className={styles.navMenu}>
      <GlassContainer className={navRoutesStyle}>
        <NavButton text="Work" href="/" />
        <NavButton text="About" href="/information" />
      </GlassContainer>

      <div className={navSocialsStyle}>
        <GlassContainer>
          <LinkedInLink size={20} />
        </GlassContainer>
        <GlassContainer>
          <GithubLink size={20} />
        </GlassContainer>
      </div>
    </div>
  );
}
