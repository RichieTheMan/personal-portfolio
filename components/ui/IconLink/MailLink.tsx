import Link from "next/link";
import styles from "./IconLink.module.css";
import { Icon, IconProps } from "../Icon";

export default function MailLink({ ...props }: IconProps) {
  return (
    <Link
      href="mailto:rikisousa.9@gmail.com"
      target="_blank"
      className={styles.iconLink}
    >
      <Icon {...props} />
    </Link>
  );
}
