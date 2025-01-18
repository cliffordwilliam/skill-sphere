"use client";

import { Mail } from "lucide-react";

export default function EmailField() {
  return (
    <>
      <div>
        <label htmlFor="email" className="text-gray-800 text-sm mb-2 block">
          Email
        </label>
        <div className="relative flex items-center">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            className="p-3 w-full text-sm border outline-blue-600 rounded"
          />
          <Mail color="#bbb" className="absolute right-4" />
        </div>
      </div>
    </>
  );
}
