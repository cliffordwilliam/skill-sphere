import RegisterFormCard from "@/app/_features/register/ui/register-form-card";
import heroMobile from "@public/hero-mobile.png";
import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* client login form */}
      <RegisterFormCard />
      {/* illustration */}
      <Image
        src={heroMobile}
        className="hidden md:block"
        alt="Screenshot of the dsdsadsa showing desktop version"
      />
    </>
  );
}
