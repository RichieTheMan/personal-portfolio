import React from "react";
import "./styles.css";
import Image from "next/image";
import { ExternalLink } from "../ExternalLink";
import { Link } from "../Link";

export function Footer() {
  return (
    <footer>
      <div className="entry-fade" />
      <div className="left-section">
        <Image
          src="/assets/images/logo-mark.png"
          alt="Ricardo Sousa's Logo"
          width={22}
          height={22}
        />
        <div className="gap-xxs column">
          <p>© 2024 Ricardo Sousa. All Rights Reserved</p>
          <p className="soft-text">Last updated on October 18, 2024, 06:00 PM WEST</p>
        </div>
      </div>
      <div className="link-section">
        <div className="gap-lg column">
          <h1 className="soft-text">PAGES</h1>
          <div className="gap-xxs column">
            <Link text="Work" href="/" />
            <Link text="Freelance" href="/" />
            <Link text="About Me" href="/" />
          </div>
        </div>
        <div className="gap-lg column">
          <h1 className="soft-text">CONTACTS</h1>
          <div className="gap-xxs column">
            <ExternalLink text="Resume" href="/" />
            <ExternalLink text="LinkedIn" href="/" />
            <ExternalLink text="Mail" href="/" />
          </div>
        </div>
      </div>
    </footer>
  );
}
