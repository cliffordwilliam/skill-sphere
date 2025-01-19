"use client";

import { FormHeaderProps } from "../definitions/form-header-props";

export default function FormHeader({ title, subheading }: FormHeaderProps) {
  return (
    <>
      <div className="mb-8">
        {/* title */}
        <h1 className="text-gray-800 text-3xl font-bold">{title}</h1>
        {/* subheading */}
        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          {subheading}
        </p>
      </div>
    </>
  );
}
