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
          className="logo-responsive"
          src="/assets/images/logo-v4.1.png"
          alt="Ricardo Sousa's Logo"
          width={22}
          height={22}
        />
        <Image
          className="logo"
          src="/assets/images/logo-v4.1.png"
          alt="Ricardo Sousa's Logo"
          width={64}
          height={64}
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
            <Link text="About Me" href="/information" />
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
