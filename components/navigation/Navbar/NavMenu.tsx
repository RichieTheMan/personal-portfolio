import React from "react";
import styles from "./NavMenu.module.css";
import { GithubLink, GlassContainer, LinkedInLink } from "@/components/ui";
import { NavButton } from "./NavButton";

type NavMenuProps = {
  isOpen: boolean;
};

export function NavMenu({ isOpen }: NavMenuProps) {
  return (
    <div className={styles.navMenu}>
      <GlassContainer
        className={`${styles.navRoutesFrame} ${
          !isOpen && styles.slideOutDelay
        }`}
      >
        <NavButton text="Work" href="/" />
        <NavButton text="About" href="/information" />
      </GlassContainer>

      <div
        className={`${styles.navSocialsFrame} ${!isOpen && styles.slideOut}`}
      >
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
