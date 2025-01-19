import clsx from "clsx";
import Link from "next/link";
import { ButtonLinkProps } from "./definitions/button-link-props";

export default function ButtonLink({
  href,
  text,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx({
        "btn-primary": variant === "primary",
        "sec-primary": variant === "secondary",
      })}
    >
      <span>{text}</span>
    </Link>
  );
}
