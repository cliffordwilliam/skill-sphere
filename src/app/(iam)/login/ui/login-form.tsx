"use client";

import { register } from "../actions/register";
import EmailField from "./email-field";
import FormFooter from "./form-footer";
import FormHeader from "./form-header";
import PasswordField from "./password-field";
import SubmitButton from "./submit-button";

export default function LoginForm() {
  return (
    <>
      <form
        action={register}
        className="bg-white grid gap-4 grid-cols-1 max-w-md border border-gray-300 rounded-lg p-6 shadow-md"
      >
        <FormHeader />
        <EmailField />
        <PasswordField />
        <SubmitButton />
        <FormFooter />
      </form>
    </>
  );
}
