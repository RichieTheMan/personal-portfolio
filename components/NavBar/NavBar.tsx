"use client";
import React from "react";
import Image from "next/image";
import "./styles.css";
import { NavButton } from "./NavButton";
import { ExternalLink } from "../ExternalLink";
import { LinkedInIconLink } from "../LinkedInIconLink";
import { MailIconLink } from "../MailIconLink";
import { NavMenu } from "./NavMenu";
import { NavBarProvider, useNavBarContext } from "./NavBarContext";

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
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="nav-section">
        <NavButton text="Work" href="/" />
        <NavButton text="Freelance" href="/freelance" />
        <NavButton text="About Me" href="/information" />
      </div>
      <Image
        className="logo"
        src="/assets/images/logo-mark-responsive.png"
        alt="Ricardo Sousa's Logo"
        width={22}
        height={22}
      />
      <div className="nav-section">
        <ExternalLink text="Resume" href="/" />
        <LinkedInIconLink />
        <MailIconLink />
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
