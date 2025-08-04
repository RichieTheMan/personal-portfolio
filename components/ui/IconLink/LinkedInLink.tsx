import Link from "next/link";
import styles from "./IconLink.module.css";
import { Icon, IconProps } from "../Icon";

export default function LinkedInLink({ ...props }: IconProps) {
  return (
    <Link
      href="https://www.linkedin.com/in/ricardo-sousa-linked/"
      target="_blank"
      className={styles.iconLink}
    >
      <Icon iconName="linkedin" {...props} />
    </Link>
  );
}
