import "./styles.css";

type LinkProps = {
  text: string;
  href: string;
};

export function Link({ text, href }: LinkProps) {
  return <a className="link" href={href}>{text}</a>;
}
