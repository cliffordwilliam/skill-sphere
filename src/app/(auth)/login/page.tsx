import LoginFormCard from "@/app/_features/login/ui/login-form-card";
import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* client login form */}
      <LoginFormCard />
      {/* illustration */}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshot of the dsdsadsa showing desktop version"
      />
    </>
  );
}
