"use client";

import clsx from "clsx";
import { LoaderCircle } from "lucide-react";

export default function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <>
      {/* submit button */}
      <button
        type="submit"
        disabled={pending}
        className={clsx(
          "btn-primary mt-4",
          pending && "opacity-50 cursor-not-allowed flex items-center"
        )}
      >
        {pending && <LoaderCircle className="animate-spin w-4 h-4 mr-3" />}
        {pending ? "Loading..." : "Submit"}
      </button>
    </>
  );
}
