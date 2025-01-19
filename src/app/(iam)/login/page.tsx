import Image from "next/image";
import LoginFormCard from "./_ui/login-form-card";

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
