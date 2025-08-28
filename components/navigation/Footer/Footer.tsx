"use client";
import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import { ExternalLink, TextLink } from "@/components/ui";
import { DotLoader } from "@/components/feedback";

export default function Footer() {
  const [updateText, setUpdatetext] = useState<string | null>(null);

  const getUpdate = async () => {
    const lastCommitUrl =
      "https://api.github.com/repos/RichieTheMan/personal-portfolio/commits?per_page=1";

    try {
      const response = await fetch(lastCommitUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      const date = new Date(result[0].commit.author.date);

      const updateText = `Last updated on ${date.toUTCString()}`;

      setUpdatetext(updateText);
    } catch (error: unknown) {
      console.error(error);
      setUpdatetext("Update date Unavailable");
    }
  };

  useEffect(() => {
    getUpdate();
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.siteInfoFrame}>
        <Image
          src="/assets/svgs/logo.svg"
          alt="Ricardo Sousa's Logo"
          width={28}
          height={28}
        />
        <div className="gap-micro column relative">
          <p className={styles.copyrightText}>
            © 2024 Ricardo Sousa. All Rights Reserved
          </p>
          {updateText ? (
            <p className={styles.lastUpdateDateText}>{updateText}</p>
          ) : (
            <div className={`${styles.loaderFrame} relative`}>
              {"0"}
              <DotLoader />
            </div>
          )}
        </div>
      </div>

      <div className={styles.linkFrame}>
        <div className="gap-xs column">
          <h1 className={styles.linkCategoryText}>PAGES</h1>
          <div className="gap-micro column">
            <TextLink text="Work" href="/" />
            <TextLink text="About" href="/information" />
          </div>
        </div>

        <div className="gap-xs column">
          <h1 className={styles.linkCategoryText}>CONTACTS</h1>
          <div className="gap-micro column">
            <ExternalLink text="Resume" href="/" />
            <ExternalLink text="LinkedIn" href="/" />
            <ExternalLink text="Github" href="/" />
          </div>
        </div>
      </div>
    </footer>
  );
}
