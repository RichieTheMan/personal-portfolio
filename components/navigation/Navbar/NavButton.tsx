import styles from "./NavButton.module.css";
import { usePathname, useRouter } from "next/navigation";

type NavButtonProps = {
  text: string;
  href: string;
  onClick?: () => void;
};

export function NavButton({ text, href, onClick }: NavButtonProps) {
  const path = usePathname();
  const router = useRouter();

  const handleClick = () => {
    if (onClick) onClick();
    router.push(href);
  };

  return (
    <button
      className={path != href ? styles.navButton : styles.navButtonActive}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
