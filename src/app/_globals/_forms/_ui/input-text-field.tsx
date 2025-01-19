import clsx from "clsx";
import { InputTextFieldProps } from "../_definitions/input-text-field-interface";

export default function InputTextField({
  type,
  id,
  name,
  label,
  placeholder,
  error,
  Icon,
}: InputTextFieldProps) {
  return (
    <div>
      {/* label */}
      <label htmlFor={id} className="text-gray-800 text-sm mb-2 block">
        {label}
      </label>
      {/* field */}
      <div className="relative flex items-center">
        {/* input */}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          className={clsx("input-field", error && "input-field-error")}
        />
        {/* icon */}
        <Icon color={error ? "#f44" : "#bbb"} className="absolute right-4" />
      </div>
      {/* error lable */}
      {error && (
        <p className="mt-2 text-sm text-red-600">
          <span className="font-medium">Error:</span> {error}
        </p>
      )}
    </div>
  );
}
