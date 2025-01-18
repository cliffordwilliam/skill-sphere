"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function register(formData: FormData) {
  // get form data
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  // add it db
  await prisma.user.create({
    data: {
      email,
      password,
    },
  });
  // revalidate
  revalidatePath("/");
  // kick
  redirect("/");
}
