"use client";

import Link from "next/link";

export default function FormFooter() {
  return (
    <>
      <p className="text-sm mt-8 text-center text-gray-500">
        Don&apos;t have an account{" "}
        <Link
          href={"/"}
          className="text-blue-600 font-semibold hover:underline ml-1"
        >
          Register here
        </Link>
      </p>
    </>
  );
}
