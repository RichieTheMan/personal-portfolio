import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import { ExternalLink } from "../../links/ExternalLink";
import { Link } from "../../links/Link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.siteInfoFrame}>
        <Image
          src="/assets/svgs/logo.svg"
          alt="Ricardo Sousa's Logo"
          width={28}
          height={28}
        />
        <div className="gap-micro column">
          <p className={styles.copyrightText}>
            © 2024 Ricardo Sousa. All Rights Reserved
          </p>
          <p className={styles.lastUpdateDateText}>
            Last updated on October 18, 2024, 06:00 PM WEST
          </p>
        </div>
      </div>

      <div className={styles.linkFrame}>
        <div className="gap-xs column">
          <h1 className={styles.linkCategoryText}>PAGES</h1>
          <div className="gap-micro column">
            <Link text="Work" href="/" />
            <Link text="About" href="/information" />
          </div>
        </div>

        <div className="gap-xs column">
          <h1 className={styles.linkCategoryText}>CONTACTS</h1>
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
