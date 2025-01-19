import LoginFormCard from "@/app/_features/login/ui/login-form-card";
import heroDesktop from "@public/hero-desktop.png";
import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* client login form */}
      <LoginFormCard />
      {/* illustration */}
      <Image
        src={heroDesktop}
        className="hidden md:block"
        alt="Screenshot of the dsdsadsa showing desktop version"
      />
    </>
  );
}
