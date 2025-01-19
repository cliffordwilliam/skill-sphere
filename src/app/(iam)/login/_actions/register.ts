"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { RegisterFormState } from "../_definitions/register-form-state";

export async function register(
  previousState: RegisterFormState,
  formData: FormData
) {
  // fake lag
  await new Promise((resolve) => setTimeout(resolve, 3000));
  // get form data
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // todo: validate zod here then throw
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
    // todo: find out what to do with this err
    return {
      message: "An error occurred while creating your account.",
    };
  }
  // revalidate
  revalidatePath("/");
  // kick
  redirect("/");
}
