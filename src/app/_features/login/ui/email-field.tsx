import InputTextField from "@/app/_features/common/forms/ui/input-text-field";
import { Mail } from "lucide-react";

export default function EmailField({ error }: { error?: string }) {
  return (
    <InputTextField
      type="email"
      id="email"
      name="email"
      label="Email"
      placeholder="Enter Email"
      error={error}
      Icon={Mail}
    />
  );
}
