import styles from "./DotLoader.module.css";
import { HTMLAttributes } from "react";

type DotLoaderProps = {
  fill?: string;
  size?: number;
};

export default function DotLoader({
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={styles.dotLoader} {...props} />;
}
