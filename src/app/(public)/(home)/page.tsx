import ButtonLink from "@/app/_features/common/buttons/button-link";
import { prisma } from "@/lib/prisma";
import heroDesktop from "@public/hero-desktop.png";
import heroMobile from "@public/hero-mobile.png";
import Image from "next/image";

export default async function Page() {
  const users = await prisma.user.findMany();
  return (
    <>
      {/* root page */}
      <main className="grow">
        {/* layout */}
        <div className="grid md:grid-cols-2 items-center justify-items-center gap-6 container mx-auto p-5">
          {/* text section */}
          <div className="max-md:order-1 max-md:text-center">
            {/* title */}
            <h1 className="text-gray-800 md:text-3xl text-2xl md:leading-10">
              Prompt Delivery and Enjoyable Dining Experience.
            </h1>
            {/* sub */}
            <p className="mt-4 text-sm text-gray-600">
              Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla
              officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad
              tempor ut reprehenderit.
            </p>
            {/* login button */}
            <div className="mt-8 flex gap-4">
              <ButtonLink href="/login" text="Login" />
              <ButtonLink
                href="/register"
                text="Register"
                variant="secondary"
              />
            </div>
          </div>
          {/* illustration */}
          <div>
            <Image
              src={heroDesktop}
              alt="Screenshots of the dashboard project showing desktop version"
              className="hidden md:block"
            />
            <Image
              src={heroMobile}
              alt="Screenshot of the dashboard project showing mobile version"
              className="block md:hidden"
            />
          </div>
        </div>
        {/* layout */}
        <div className="container mx-auto">
          {/* table */}
          <table className="min-w-full divide-y divide-gray-200">
            {/* head row */}
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left text-xs font-semibold text-gray-500 uppercase">
                  Email
                </th>
                <th className="p-4 text-left text-xs font-semibold text-gray-500 uppercase">
                  Password
                </th>
              </tr>
            </thead>
            {/* rows */}
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="p-4 text-sm text-gray-800">{user.email}</td>
                  <td className="p-4 text-sm text-gray-800">{user.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
