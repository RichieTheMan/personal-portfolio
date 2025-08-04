"use client";
import React from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { NavButton } from "./NavButton";
import { NavMenu } from "./NavMenu";
import { GlassContainer } from "../../wrappers/GlassContainer";
import { LinkedInIconLink } from "../../links/LinkedInIconLink";
import { NavbarProvider, useNavbarContext } from "./NavbarContext";
import { GithubLink } from "@/components/links/GithubLink";

function NavbarContent() {
  const { showNavMenu } = useNavbarContext();

  return (
    <nav className={styles.navbar}>
      <NavMenu />
      <button className={styles.dropdownMenuButton} onClick={showNavMenu}>
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
      <Image
        className={styles.logo}
        src="/assets/svgs/logo.svg"
        alt="Ricardo Sousa's Logo"
        width={24}
        height={24}
      />
      <GlassContainer className={`${styles.navRoutesFrame} abs-center`}>
        <NavButton text="Work" href="/" />
        <NavButton text="About" href="/information" />
      </GlassContainer>
      <div className={styles.navSocialsFrame}>
        <LinkedInIconLink size={20} />
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
