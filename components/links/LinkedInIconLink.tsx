import { Icon, IconProps } from "../Icon";

type LinkedInIconLinkProps = IconProps;

export function LinkedInIconLink({ ...props }: LinkedInIconLinkProps) {
  return (
    <a
      href="https://www.linkedin.com/in/ricardo-sousa-linked/"
      target="_blank"
      className="icon-link"
    >
      <Icon iconName="linkedin" {...props} />
    </a>
  );
}
