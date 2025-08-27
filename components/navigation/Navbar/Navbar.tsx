"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { NavButton } from "./NavButton";
import { NavMenu } from "./NavMenu";
import { NavbarProvider, useNavbarContext } from "./NavbarContext";
import { GithubLink, GlassContainer, LinkedInLink } from "@/components/ui";
import { delay } from "@/utils/delay";

function NavbarContent() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isNavMenuShowing, setIsNavMenuShowing } = useNavbarContext();

  const handleClick = async () => {
    setIsOpen(!isOpen);
    if (isOpen) await delay(400);

    setIsNavMenuShowing(!isNavMenuShowing);
  };

  return (
    <nav className={styles.navbar}>
      <NavMenu isOpen={isOpen} />

      <Image
        className={styles.logo}
        src="/assets/svgs/logo.svg"
        alt="Ricardo Sousa's Logo"
        width={24}
        height={24}
      />
      <button className={styles.dropdownMenuButton} onClick={handleClick}>
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
      <GlassContainer className={`${styles.navRoutesFrame} abs-center`}>
        <NavButton text="Work" href="/" />
        <NavButton text="About" href="/information" />
      </GlassContainer>
      <div className={styles.navSocialsFrame}>
        <LinkedInLink size={20} />
        <GithubLink size={20} />
      </div>
    </nav>
  );
}

export default function Navbar() {
  return (
    <NavbarProvider>
      <NavbarContent />
    </NavbarProvider>
  );
}
