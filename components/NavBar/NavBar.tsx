"use client";
import React from "react";
import Image from "next/image";
import "./styles.css";
import { NavButton } from "./NavButton";
import { ExternalLink } from "../ExternalLink";
import { LinkedInIconLink } from "../LinkedInIconLink";
import { MailIconLink } from "../MailIconLink";

export function NavBar() {
  return (
    <nav>
      <div className="nav-section">
        <NavButton text="Work" href="/" />
        <NavButton text="Freelance" href="/freelance" />
        <NavButton text="About Me" href="/information" />
      </div>
      <Image
        style={{ position: "absolute", left: "50%", top: "50%", transform: "translateY(-50%)"}}
        src="/assets/images/logo-mark.png"
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
