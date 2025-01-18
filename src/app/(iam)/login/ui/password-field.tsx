"use client";

import { KeyRound } from "lucide-react";

export default function PasswordField() {
  return (
    <>
      <div>
        <label htmlFor="password" className="text-gray-800 text-sm mb-2 block">
          Password
        </label>
        <div className="relative flex items-center">
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            className="p-3 w-full text-sm border outline-blue-600 rounded"
          />
          <KeyRound color="#bbb" className="absolute right-4" />
        </div>
      </div>
    </>
  );
}
