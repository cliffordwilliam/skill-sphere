import Link from "next/link";
import LoginLink from "./login-link";
import Logo from "./logo";

export default function Header() {
  return (
    <>
      {/* navbar color */}
      <header className="shadow-md bg-white">
        {/* layout */}
        <div className="container mx-auto flex p-4 bg-white items-center gap-4 w-full">
          {/* logo */}
          <Link href="/">
            <Logo />
          </Link>
          {/* button */}
          <span className="ml-auto">
            <LoginLink />
          </span>
        </div>
      </header>
    </>
  );
}
