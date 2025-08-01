"use client";
import React from "react";
import Image from "next/image";
import "./styles.css";
import { NavButton } from "./NavButton";
import { NavMenu } from "./NavMenu";
import { NavBarProvider, useNavBarContext } from "./NavBarContext";
import { GlassContainer } from "../../wrappers/GlassContainer";
import { LinkedInIconLink } from "../../links/LinkedInIconLink";
import { MailIconLink } from "../../links/MailIconLink";

function NavBarContent() {
  const { showNavMenu } = useNavBarContext();

  return (
    <nav>
      <NavMenu />
      <button className="dropdown-menu-button" onClick={showNavMenu}>
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
        className="logo"
        src="/assets/svgs/logo.svg"
        alt="Ricardo Sousa's Logo"
        width={28}
        height={28}
      />
      <GlassContainer className="nav-section center" style={{ zIndex: 999 }}>
        <NavButton text="Work" href="/" />
        <NavButton text="About" href="/information" />
      </GlassContainer>
      <div className="nav-section">
        <LinkedInIconLink size={22} />
        <MailIconLink size={22} />
      </div>
    </nav>
  );
}

export function NavBar() {
  return (
    <NavBarProvider>
      <NavBarContent />
    </NavBarProvider>
  );
}
