"use client";

import Link from "next/link";
import { FormFooterProps } from "../definitions/form-footer-props";

export default function FormFooter({
  text,
  linkText,
  linkHref,
}: FormFooterProps) {
  return (
    <>
      {/* text with link */}
      <p className="text-sm mt-8 text-center text-gray-500">
        {text}
        <Link href={linkHref} className="link ml-1">
          {linkText}
        </Link>
      </p>
    </>
  );
}
