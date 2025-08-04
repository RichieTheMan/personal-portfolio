import styles from "./NavButton.module.css";
import { usePathname, useRouter } from "next/navigation";

type NavButtonProps = {
  text: string;
  href: string;
};

export function NavButton({ text, href }: NavButtonProps) {
  const path = usePathname();
  const router = useRouter();

  return (
    <button
      className={path != href ? styles.navButton : styles.navButtonActive}
      onClick={() => router.push(href)}
    >
      {text}
    </button>
  );
}
