import InputTextField from "@/app/_features/common/forms/ui/input-text-field";
import { KeyRound } from "lucide-react";

export default function PasswordField({ error }: { error?: string }) {
  return (
    <InputTextField
      type="password"
      id="password"
      name="password"
      label="Password"
      placeholder="Enter Password"
      error={error}
      Icon={KeyRound}
    />
  );
}
