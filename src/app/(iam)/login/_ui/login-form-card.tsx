"use client";

import { useActionState } from "react";
import { register } from "../_actions/register";
import EmailField from "./email-field";
import FormFooter from "./form-footer";
import FormHeader from "./form-header";
import PasswordField from "./password-field";
import SubmitButton from "./submit-button";

export default function LoginFormCard() {
  const [state, action, pending] = useActionState(register, undefined);
  return (
    <>
      {/* form card - bg color and layout */}
      <form
        action={action}
        className="bg-white flex flex-col gap-4 max-w-md border border-gray-300 rounded-lg p-6 shadow-md"
      >
        <FormHeader />
        <EmailField error={state?.errors?.email} />
        <PasswordField error={state?.errors?.password} />
        <SubmitButton pending={pending} />
        <FormFooter />
        {/* todo: use toast or something for this */}
        {state?.message && <p>{state?.message}</p>}
      </form>
    </>
  );
}
