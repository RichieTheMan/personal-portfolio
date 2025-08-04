import Link from "next/link";
import styles from "./IconLink.module.css";
import { Icon, IconProps } from "../Icon";

export default function GithubLink({ ...props }: IconProps) {
  return (
    <Link
      href="https://github.com/RichieTheMan"
      target="_blank"
      className={styles.iconLink}
    >
      <Icon iconName="github" {...props} />
    </Link>
  );
}
