"use server";

import { LoginFormState } from "../definitions/login-form-state";

export async function login(previousState: LoginFormState, formData: FormData) {
  // fake lag
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // get form data
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // TODO: validate zod here then throw
  if (!email) {
    return {
      errors: {
        email: "dsa",
      },
    };
  }
  if (!password) {
    return {
      errors: {
        password: "dsa",
      },
    };
  }
  // TODO: do login logic
  return {
    toastError: "Login coming soon :(",
  };
  // let client kick
}
