"use client";

import { KeyRound, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import toast from "react-hot-toast";
import FormFooter from "../../common/forms/ui/form-footer";
import FormHeader from "../../common/forms/ui/form-header";
import FormSubmitButton from "../../common/forms/ui/form-submit-button";
import InputTextField from "../../common/forms/ui/input-text-field";
import { login } from "../actions/login";

export default function LoginFormCard() {
  const [state, action, pending] = useActionState(login, undefined);
  const router = useRouter();

  // toast and kick
  useEffect(() => {
    if (state?.toastError) {
      toast.error(state.toastError);
      router.push("/");
    }
  }, [state, router]);

  return (
    <>
      {/* form card - bg color and layout */}
      <form action={action} className="flex flex-col gap-4 max-w-md card">
        <FormHeader
          title="Login"
          subheading="Login to your account and explore a world of possibilities. Your journey begins here."
        />
        {/* email field */}
        <InputTextField
          type="email"
          id="email"
          name="email"
          label="Email"
          placeholder="Enter Email"
          error={state?.errors?.email}
          Icon={Mail}
        />
        {/* password field */}
        <InputTextField
          type="password"
          id="password"
          name="password"
          label="Password"
          placeholder="Enter Password"
          error={state?.errors?.email}
          Icon={KeyRound}
        />
        <FormSubmitButton pending={pending} />
        <FormFooter
          text="Do not have an account"
          linkText="Register here"
          linkHref="/register"
        />
        {/* TODO: use toast or something for this */}
        {/* {state?.message && <p>{state?.message}</p>} */}
      </form>
    </>
  );
}
