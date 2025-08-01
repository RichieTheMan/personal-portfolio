import { Icon, IconProps } from "../Icon";

type MailIconLinkProps = IconProps;

export function MailIconLink({ ...props }: MailIconLinkProps) {
  return (
    <a
      href="mailto:rikisousa.9@gmail.com"
      target="_blank"
      className="icon-link"
    >
      <Icon {...props} />
    </a>
  );
}
