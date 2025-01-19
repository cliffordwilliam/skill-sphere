import { Mail } from "lucide-react";
import InputTextField from "../../../_globals/_forms/_ui/input-text-field";

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
