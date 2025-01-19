"use client";

import clsx from "clsx";
import { KeyRound } from "lucide-react";

export default function PasswordField({ error }: { error?: string }) {
  return (
    <>
      <div>
        {/* label */}
        <label htmlFor="password" className="text-gray-800 text-sm mb-2 block">
          Password
        </label>
        {/* field */}
        <div className="relative flex items-center">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className={clsx(
              "p-3 w-full text-sm border rounded",
              error
                ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                : "outline-blue-600"
            )}
          />
          <KeyRound color="#bbb" className="absolute right-4" />
        </div>
        {error && (
          <p className="mt-2 text-sm text-red-600">
            <span className="font-medium">Error:</span> {error}
          </p>
        )}
      </div>
    </>
  );
}
