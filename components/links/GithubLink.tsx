import { Icon, IconProps } from "../Icon";

type GithubLinkProps = IconProps;

export function GithubLink({ ...props }: GithubLinkProps) {
  return (
    <a
      href="https://github.com/RichieTheMan"
      target="_blank"
      className="icon-link"
    >
      <Icon iconName="github" {...props} />
    </a>
  );
}
