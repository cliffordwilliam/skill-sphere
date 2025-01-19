import { LucideIcon } from "lucide-react";

export interface InputTextFieldProps {
  type: "text" | "email" | "password";
  id: string;
  name: string;
  label: string;
  placeholder: string;
  error?: string;
  Icon: LucideIcon;
}
