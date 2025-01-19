"use client";

import clsx from "clsx";
import { LoaderCircle } from "lucide-react";

export default function FormSubmitButton({
  pending,
  onClick,
}: {
  pending: boolean;
  onClick?: () => void;
}) {
  return (
    <>
      {/* submit button */}
      <button
        type="submit"
        disabled={pending}
        onClick={onClick}
        className={clsx(
          "btn-primary mt-4",
          pending &&
            "hover:bg-blue-400 bg-blue-400 cursor-not-allowed flex items-center justify-center"
        )}
      >
        {pending && <LoaderCircle className="animate-spin mr-3" />}
        {pending ? "Loading..." : "Submit"}
      </button>
    </>
  );
}
