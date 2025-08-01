import React from "react";
import "./styles.css";
import Image from "next/image";
import { ExternalLink } from "../../links/ExternalLink";
import { Link } from "../../links/Link";
import lastUpdated from "../../../scripts/last-updated.json";

export function Footer() {
  const updatedDate = new Date(lastUpdated.date).toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Lisbon",
  });

  return (
    <footer>
      <div className="left-section">
        <Image
          className="logo"
          src="/assets/svgs/logo.svg"
          alt="Ricardo Sousa's Logo"
          width={28}
          height={28}
        />
        <div className="gap-micro column">
          <p className="footer-copyright-text">
            © 2024 Ricardo Sousa. All Rights Reserved
          </p>
          <p id="update-label" className="soft-text">
            Last updated on {updatedDate}
          </p>
          {/* Last updated on October 18, 2024, 06:00 PM WEST */}
        </div>
      </div>

      <div className="link-section">
        <div className="gap-xs column">
          <h1 className="soft-text">PAGES</h1>
          <div className="gap-micro column">
            <Link text="Work" href="/" />
            <Link text="About" href="/information" />
          </div>
        </div>
        <div className="gap-xs column">
          <h1 className="soft-text">CONTACTS</h1>
          <div className="gap-micro column">
            <ExternalLink text="Resume" href="/" />
            <ExternalLink text="LinkedIn" href="/" />
            <ExternalLink text="Mail" href="/" />
          </div>
        </div>
      </div>
    </footer>
  );
}
