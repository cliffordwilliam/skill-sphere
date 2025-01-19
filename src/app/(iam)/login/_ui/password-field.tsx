import { KeyRound } from "lucide-react";
import InputTextField from "../../../_globals/_forms/_ui/input-text-field";

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
