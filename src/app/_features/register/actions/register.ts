"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { RegisterFormState } from "../definitions/register-form-state";

export async function register(
  previousState: RegisterFormState,
  formData: FormData
) {
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
  // add it db
  try {
    await prisma.user.create({
      data: {
        email,
        password,
      },
    });
  } catch (error) {
    // TODO: find out what to do with this err
    return {
      toastError: "An error occurred while creating your account",
    };
  }
  // revalidate
  revalidatePath("/");
  // TODO: do login logic here
  // let client kick
  return {
    toastSuccess: "Registration successful",
  };
}
