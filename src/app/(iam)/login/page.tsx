import Image from "next/image";
import LoginForm from "./ui/login-form";

export default function Page() {
  return (
    <>
      {/* client login form */}
      <LoginForm />
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
