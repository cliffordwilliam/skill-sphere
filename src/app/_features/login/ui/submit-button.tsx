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
